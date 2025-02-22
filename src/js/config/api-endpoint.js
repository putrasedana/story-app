import Config from "./config";

const ApiEndpoint = {
  BASE_URL: `${Config.BASE_URL}`,
  REGISTER: `/register`,
  LOGIN: `/login`,
  ADD_NEW_STORY: `/stories`,
  ADD_NEW_STORY_GUEST: `/stories/guest`,
  GET_ALL_STORIES: `/stories`,
  DETAIL_STORY: (id) => `/stories/${id}`,
};

export default ApiEndpoint;
