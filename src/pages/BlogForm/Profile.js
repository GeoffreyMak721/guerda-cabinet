import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

import { useDropzone } from "react-dropzone";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: theme.palette.primary.light,
    // width: 200,
  },
}));

const filesPath = "blogPostImage";

const Profile = ({ className, onImageChange, file, loading, ...rest }) => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    noDrag: true,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (!!acceptedFiles.length) onImageChange(acceptedFiles[0]);
    },
  });

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardMedia
        className={classes.media}
        image={file && URL.createObjectURL(file)}
        // title="Paella dish"
      />
      {/* <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar
            className={classes.avatar}
            src={files[0] && files[0].preview}
          />
        </Box>
      </CardContent> */}
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
          {...getRootProps()}
          disabled={loading}
        >
          <input {...getInputProps()} />
          Charger une image
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
