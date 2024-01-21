import { FC, useContext } from "react";

import "./style.scss";
import { PostsContext } from "../../context/contextPosts";

interface MyButtonProps {
  text: string;
  disabled?: boolean;
}

export const Button: FC<MyButtonProps> = ({ text, disabled }) => {
  const { loadMorePosts } = useContext(PostsContext);

  return (
    <div className="container-button-posts">
      <button onClick={loadMorePosts} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};
