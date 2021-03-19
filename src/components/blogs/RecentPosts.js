import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";

import PopularPosts from "components/blogs/PopularPosts.js";
const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-2xl xl:text-3xl`;

const PopularPostsContainer = tw.div`lg:w-2/3 lg:pr-12`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-col sm:justify-between lg:justify-start`;
const Post = tw(
  motion.a
)`block w-full max-w-full cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mb-8 lg:mb-8 xl:mb-16`;
const Image = styled(motion.div)((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-96 bg-cover bg-center rounded`,
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
// const AuthorInfo = tw.div`mt-6 flex items-center`;
// const AuthorImage = tw.img`w-12 h-12 rounded-full`;
// const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
// const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full  lg:w-auto   mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``;

export default ({
  posts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Getting the most out of your vacation",
      authorName: "Aaron Patterson",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Choosing the perfect Safaris in Africa",
      authorName: "Sam Phipphen",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Hiking during the monsoon in Asia",
      authorName: "Tony Hawk",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Must carry items while travelling to Thailand",
      authorName: "Himali Turn",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80",
      title: "An extremely funny trip to the Swiss Alps",
      authorName: "Naomi Watts",
      url: "https://timerse.com",
    },
  ],
}) => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  return (
    <RecentPostsContainer>
      <Heading>Articles récents</Heading>
      <PostsContainer>
        {posts.map((post, index) => (
          <Post key={index} href={`/blog/${post.slug}`} className="group">
            <PostTextContainer>
              <Title>{post.title}</Title>
              <AuthorName>
                {post.description && `${post.description.slice(0, 80)}...`}
              </AuthorName>
            </PostTextContainer>
            <Image imageSrc={post.image} />
          </Post>
        ))}
      </PostsContainer>
    </RecentPostsContainer>
  );
};
