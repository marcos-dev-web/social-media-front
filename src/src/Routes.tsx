import React from "react";
import { Route } from "react-router";

import Home from "./page/Home";
import AddPost from "./page/AddPost";
import ListPost from "./page/ListPost";

const Routes: React.FC = () => {
  return (
    <>
      <Route exact component={Home} path="/" />
      <Route exact component={AddPost} path="/new" />
      <Route exact component={ListPost} path="/list" />
    </>
  );
};

export default Routes;
