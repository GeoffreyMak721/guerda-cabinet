import React, { useState, useCallback } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "components/Page";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";

import { useSelector } from "react-redux";
import {
  useFirebase,
  useFirestore,
  useFirebaseConnect,
} from "react-redux-firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const filesPath = "blogPostImages";

const Account = () => {
  const classes = useStyles();
  const firebase = useFirebase();
  const firestore = useFirestore();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onImageChange = (file) => {
    setImage(file);
  };

  const onAddNews = useCallback(
    async (news) => {
      try {
        setLoading(true);
        const { downloadURL } = await firebase.uploadFile(
          filesPath,
          image,
          filesPath
        );

        const docRef = await firestore
          .collection("news")
          .add({ ...news, image: downloadURL });

        docRef.update({
          id: docRef.id,
          postedAt: new Date().toISOString(),
        });

        setImage(null);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [image]
  );

  return (
    <Page className={classes.root} title="Account">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Profile
              loading={loading}
              file={image}
              onImageChange={onImageChange}
            />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails loading={loading} onAddNew={onAddNews} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
