import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useStyle } from "./styles";
import logo from "../../shared/images/chuck.png";
import { jokeSelector } from "../../store/selectors/joke";

export const Jokes: FunctionComponent = () => {
  const jokeMessage = useSelector(jokeSelector);
  const { container, jokeLogo, joke, jokeDescription } = useStyle();

  return (
    <div className={container}>
      <img src={logo} alt="Chuck" className={jokeLogo}></img>
      <div className={joke}>
        <span className={jokeDescription}>{jokeMessage}</span>
      </div>
    </div>
  );
};
