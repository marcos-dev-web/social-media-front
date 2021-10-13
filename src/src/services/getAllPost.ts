import axios from "./api";

import { Post } from '../contexts/Posts/types';

import { ApiResponse } from '../types';

async function getAllPost() {
  const request: ApiResponse = await axios.get("/post/all");

  const result: Array<Post> = request.data?.data as Array<Post>;

  return result;
}

export default getAllPost;
