import { SET_NEWS_DATA, REMOVE_NEWS_DATA } from "../actions/newsActions";
import { news } from "../data/news";

const initialState = {
  page: 1,
  news,
};

const newsReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case REMOVE_NEWS_DATA: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
