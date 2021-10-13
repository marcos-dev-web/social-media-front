import React, { createContext, useContext, useState, useEffect } from "react";

import getAllPost from "../../services/getAllPost";
import doComment from "../../services/comment";

import { Context, Post } from "./types";

const PostsContext = createContext({} as Context);

const PostsProvider: React.FC = ({ children }) => {
  const [postList, setPostList] = useState<Array<Post>>([]);

  useEffect(() => {
    async function fetch() {
      const posts = await getAllPost();
      setPostList(posts);
    }

    fetch();
  }, []);

  async function refreshList() {
    const posts = await getAllPost();
    setPostList(posts);
  }

  async function post(title: string, content: string) {
    await refreshList();
  }

  async function comment(content: string, postId: number) {
    await doComment(postId, content);

    return await refreshList();
  }

  async function like(postId: number) {
    await refreshList();
  }

  return (
    <PostsContext.Provider
      value={{
        comment,
        like,
        post,
        postList,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export function usePosts() {
  return useContext(PostsContext);
}

export default PostsProvider;
