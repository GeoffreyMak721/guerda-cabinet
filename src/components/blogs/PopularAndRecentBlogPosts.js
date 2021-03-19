import React, { useMemo } from "react";
import tw from "twin.macro";

import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

import PopularPosts from "components/blogs/PopularPosts.js";
import RecentPosts from "components/blogs/RecentPosts.js";
import SpecificPost from "components/blogs/SpecificPost.js";
import AllPosts from "components/blogs/AllPosts.js";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { connect } from "react-redux";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;

const PopularAndRecentBlogPost = ({ slug = null, page = null }) => {
  useFirestoreConnect([
    {
      collection: "news",
      orderBy: ["postedAt", "desc"],
      limit: 6,
      // storeAs: myProjectsReduxName
    },
  ]); // sync news collection from Firestore into redux

  const data = useSelector((state) => state.firestore.data);

  const specificPost = useMemo(() => {
    if (!!data.news && !!slug) {
      const news = Object.values(data.news).filter((n) => n.slug === slug);
      return news && news[0];
    }
  }, [data.news, slug]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          {slug ? (
            <SpecificPost post={specificPost} />
          ) : (
            <PopularPosts posts={data.news && Object.values(data.news)} />
          )}
          <RecentPosts posts={data.news && Object.values(data.news)} />
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};

const mapStateToProps = ({ news }) => ({
  news: news.news,
  page: news.page,
});

export default connect(mapStateToProps)(PopularAndRecentBlogPost);
