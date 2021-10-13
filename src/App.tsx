import Start from "./src";

import PostsProvider from "./src/contexts/Posts";

function App() {
  return (
    <PostsProvider>
      <Start />
    </PostsProvider>
  );
}

export default App;
