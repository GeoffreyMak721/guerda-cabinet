import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { css } from "styled-components/macro"; //eslint-disable-line

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

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
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;
const LinkButton = styled(PrimaryButtonBase).attrs({ as: Link })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

export default ({
  posts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      title: "Tips on how to travel safely in foreign countries",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Charlotte Delos",
      authorProfile: "Travel Advocate",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Vlogger",
      url: "/blog/2",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Vlogger",
      url: "/blog/2",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Vlogger",
      url: "/blog/2",
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
    <PopularPostsContainer>
      {/* <Heading>Popular Posts</Heading> */}
      {/* <PostsContainer> */}
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item lg={6}>
            <Post
              key={index}
              href={`/blog/${post.slug}`}
              className="group"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Image
                transition={{ duration: 0.3 }}
                variants={postBackgroundSizeAnimation}
                imageSrc={post.image}
              />
              <Title>{post.title}</Title>
              <Description>
                {post.description && `${post.description.slice(0, 200)}...`}
              </Description>
              <AuthorInfo>
                {/* <AuthorImage src={post.authorImageSrc} /> */}
                <AuthorNameAndProfession>
                  <AuthorName>{post.authorName}</AuthorName>
                  <AuthorProfile>{post.authorProfile}</AuthorProfile>
                </AuthorNameAndProfession>
              </AuthorInfo>
            </Post>
          </Grid>
        ))}
      </Grid>
      {/* </PostsContainer> */}
    </PopularPostsContainer>
  );
};
