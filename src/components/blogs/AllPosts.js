import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";

const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(
  motion.a
)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`,
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  //Recommended: Only 2 Items
  const popularPosts = [
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
      url: "https://reddit.com",
    },
  ];

  return (
    <PopularPostsContainer>
      {/* <Heading>Popular Posts</Heading> */}
      <PostsContainer>
        {popularPosts.map((post, index) => (
          <Post
            key={index}
            href={post.url}
            className="group"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Image
              transition={{ duration: 0.3 }}
              variants={postBackgroundSizeAnimation}
              imageSrc={post.postImageSrc}
            />
            <Title>{post.title}</Title>
            <Description>{post.description}</Description>
            <AuthorInfo>
              <AuthorImage src={post.authorImageSrc} />
              <AuthorNameAndProfession>
                <AuthorName>{post.authorName}</AuthorName>
                <AuthorProfile>{post.authorProfile}</AuthorProfile>
              </AuthorNameAndProfession>
            </AuthorInfo>
          </Post>
        ))}
      </PostsContainer>
    </PopularPostsContainer>
  );
};
