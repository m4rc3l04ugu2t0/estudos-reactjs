import "./style.scss";

import { InputTypeSearch } from "../InputTypeSearch";
import { Button } from "../Button";
import { H1 } from "../H1";

export const Header = () => (
  <header>
    <H1 />
    <InputTypeSearch />
    <Button text={"click"} disabled={false} />
  </header>
);
