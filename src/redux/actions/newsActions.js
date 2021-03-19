import history from "history.js";
import jwtAuthService from "../../services/jwtAuthService";

export const SET_NEWS_DATA = "NEWS_SET_DATA";
export const REMOVE_NEWS_DATA = "NEWS_REMOVE_DATA";

export const setNewsData = (news) => (dispatch) => {
  dispatch({
    type: SET_NEWS_DATA,
    data: news,
  });
};

export const removeNewsData = () => (dispatch) => {
  // jwtAuthService.logout();

  // history.push({
  //   pathname: "/session/signin",
  // });

  dispatch({
    type: REMOVE_NEWS_DATA,
  });
};
