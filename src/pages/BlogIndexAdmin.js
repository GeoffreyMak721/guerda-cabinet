import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  // LogoLink,
  // NavToggle,
  // DesktopNavLinks,
} from "components/headers/light.js";

// import Footer from "components/footers/FiveColumnWithInputForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import PopularAndRecentBlogPosts from "components/blogs/PopularAndRecentBlogPosts.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink to="/#home">Accueil</NavLink>
    <NavLink to="/#domain">Domaines</NavLink>
    <NavLink to="/#team">Equipes</NavLink>
    <NavLink to="/#testimonials">Temoignages</NavLink>
    <NavLink to="/#blog">Blog</NavLink>
    <NavLink to="/#contact">Contact</NavLink>
  </NavLinks>,
  <NavLinks key={2}>
    <PrimaryLink to="/login">Connexion</PrimaryLink>
  </NavLinks>,
];

export default ({
  headingText = "Nos dernières nouvelles",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "Travel Tips",
      date: "April 21, 2020",
      title: "Safely Travel in Foreign Countries",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      url: "https://timerse.com",
      // featured: true,
    },
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
  ],
}) => {
  const [visible, setVisible] = useState(7);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(null);

  const handleExpandClick = (index) => () => {
    const lastIndex = expanded && expanded.split("-")[1];
    if (lastIndex && +lastIndex === +index) setExpanded(null);
    else setExpanded(`open-${index}`);
  };
  const { slug, page } = useParams();
  useFirestoreConnect([{ collection: "news", orderBy: ["postedAt", "desc"] }]); // sync todos collection from Firestore into redux
  const data = useSelector((state) => state.firestore.data);
  // console.log(todos);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  return (
    <AnimationRevealPage>
      {/* <Hero links={navLinks} /> */}
      {/* <Header links={navLinks} /> */}
      <Container>
        <ContentWithPaddingXl>
          {/* <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow> */}
          {/* <PopularAndRecentBlogPosts slug={slug} page={page} /> */}

          <Posts>
            {data.news &&
              Object.values(data.news).map((post, index) => (
                <>
                  <PostContainer key={index} featured={post.featured}>
                    <Card className={classes.root}>
                      <CardHeader
                        action={
                          <IconButton aria-label="settings">
                            {post.isPublic ? (
                              <LockOpenOutlinedIcon />
                            ) : (
                              <LockOutlinedIcon />
                            )}
                          </IconButton>
                        }
                        title={post.title}
                        subheader="September 14, 2016"
                      />
                      <CardMedia
                        className={classes.media}
                        image={post.image}
                        title={post.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {post.description}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <CreateOutlinedIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="share">
                          <DeleteOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded === `open-${index}`,
                          })}
                          onClick={handleExpandClick(index)}
                          aria-expanded={expanded === `open-${index}`}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </CardActions>
                      <Collapse
                        in={expanded === `open-${index}`}
                        timeout="auto"
                        unmountOnExit
                      >
                        <CardContent>
                          <Typography paragraph>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.content,
                              }}
                            />
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </PostContainer>
                </>
              ))}
          </Posts>

          {visible < posts.length && (
            <ButtonContainer>
              <Pagination count={10} color="primary" />
              {/* <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton> */}
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});
