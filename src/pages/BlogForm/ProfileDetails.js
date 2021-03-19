import React, { useState, useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  CircularProgress,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

import { green } from "@material-ui/core/colors";

import slugster from "slugster";

import Editor from "./Editor";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const defaultStateValues = {
  title: "",
  description: "",
  // content: "",
};

const defaultErrorValues = {
  title: "",
  description: "",
  // content: "",
};

const ProfileDetails = ({ className, onAddNew, loading, ...rest }) => {
  const classes = useStyles();

  const [values, setValues] = useState(defaultStateValues);
  const [errors, setErrors] = useState(defaultErrorValues);
  const [editorState, setEditorState] = useState("");
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleEditorChange = (value) => {
    setEditorState(value);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const addNews = useCallback(async () => {
    let isValid = true;
    let errors = defaultErrorValues;

    for (const field in values) {
      if (values.hasOwnProperty(field)) {
        const value = values[field];
        if (!value || (!!value && value.trim() === "")) {
          isValid = false;
          errors = { ...errors, [field]: "Veillez renseigner ce champ !" };
        }
      }
    }

    if (isValid) {
      await onAddNew({
        ...values,
        isPublic: checked,
        slug: slugster(values.title),
        content: editorState,
      });
      setValues(defaultStateValues);
      setEditorState("");
      setChecked(false);
    } else {
      setErrors(errors);
    }
  }, [values, checked, editorState]);

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Entrez les infromation de l'article."
          title="Ajouter un article"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                helperText={errors.title || "Donnez le titre de l'article."}
                label="Titre"
                name="title"
                error={errors.title}
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                required
                helperText={
                  errors.description ||
                  "Donnez une petite description de l'article."
                }
                error={errors.description}
                value={values.description}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                label="Categorie"
                name="category"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.category}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}

            <Grid item xs={12}>
              <Editor
                placeholder={"Rediger le contenu de l'article."}
                value={editorState}
                onChange={handleEditorChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  label="Rendre public"
                  // labelPlacement="start"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          {/* <Button color="primary" variant="contained" onClick={addNews}>
            Ajouter l'article
          </Button> */}

          <div className={classes.wrapper}>
            <Button
              color="primary"
              variant="contained"
              onClick={addNews}
              disabled={loading}
            >
              Ajouter l'article
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
};

export default ProfileDetails;
