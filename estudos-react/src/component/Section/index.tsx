import { FC } from "react";
import { PropChildren } from "../../context/contextPosts";

import "./style.scss";

export const Section: FC<PropChildren> = ({ children }) => (
  <section className="section-posts">{children}</section>
);
