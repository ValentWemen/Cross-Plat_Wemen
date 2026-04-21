import axios from "axios";

const ENV = process.env.EXPO_PUBLIC_API_URL;

// GET all posts
export const getPosts = () => {
  return axios.get(ENV + "posts");
};

// GET post detail by id
export const getPostDetail = (id: number) => {
  return axios.get(ENV + "posts/" + id);
};

// GET user detail by id
export const getUserDetail = (id: number) => {
  return axios.get(ENV + "users/" + id);
};

// GET comments by post id
export const getCommentsByPost = (postId: number) => {
  return axios.get(ENV + "posts/" + postId + "/comments");
};

// POST new post
export const postData = (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  return axios.post(ENV + "posts", data);
};