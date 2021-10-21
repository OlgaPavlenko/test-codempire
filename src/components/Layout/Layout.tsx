import { FunctionComponent } from "react";
import { Header } from "../Header/Header";
import { Categories } from "../Categories/Categories";
import { Jokes } from "../Jokes/Jokes";

export const Layout: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Jokes />
    </div>
  );
};
