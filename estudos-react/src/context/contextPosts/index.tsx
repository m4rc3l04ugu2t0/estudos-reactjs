import { createContext, useEffect, useState, ReactNode } from "react";
import { PostWithCover, fetchAPI } from "../../functions/fetchAPI";

interface PropContextPosts {
  postsPerPage: PostWithCover[] | Error;
  loadMorePosts: () => void;
}

const defaultContextValue: PropContextPosts = {
  postsPerPage: [],
  loadMorePosts: () => {},
};

export interface PropChildren {
  children: ReactNode;
}

const PostsContext = createContext(defaultContextValue);

const PostsProvider: React.FC<PropChildren> = ({ children }) => {
  const [posts, setPosts] = useState<PostWithCover[] | Error>([]);
  const [postsPerPage, setPostsPerPage] = useState<PostWithCover[] | Error>([]);
  const [nextPosts, setNextPosts] = useState<number>(2);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAPI();

      if (data instanceof Error) {
        console.log(data.message);
      } else {
        setPosts(data);
      }
    };

    fetchData();
  }, []);

  const loadMorePosts = () => {
    if (Array.isArray(posts)) {
      setNextPosts((prevState) => prevState + 2);
      const nextPost = posts.slice(0, nextPosts);

      setPostsPerPage(nextPost);
    }
  };

  return (
    <PostsContext.Provider value={{ postsPerPage, loadMorePosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsProvider, PostsContext };
