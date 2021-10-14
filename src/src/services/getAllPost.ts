import axios from "./api";

import { IPost } from '../contexts/Posts/types';

import { ApiResponse } from '../types';

async function getAllPost() {
  const request: ApiResponse = await axios.get("/post/all");

  const result: Array<IPost> = request.data?.data as Array<IPost>;

  return result;
}

export default getAllPost;
