import { FC } from "react";
import { PropChildren } from "../../context/contextPosts";

import "./style.scss";

export const Section: FC<PropChildren> = ({ children, className }) => (
  <section className={className || "class-default"}>{children}</section>
);
