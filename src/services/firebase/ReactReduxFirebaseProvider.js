import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider as RRFProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebaseConfig from "./firebaseConfig";
import store from "redux/store";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const ReactReduxFirebaseProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <RRFProvider {...rrfProps}>{children}</RRFProvider>
    </Provider>
  );
};

export default ReactReduxFirebaseProvider;
