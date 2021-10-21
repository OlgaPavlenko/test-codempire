import { FunctionComponent, useEffect, useState } from "react";
import HTTPService from "../../services/httpService";
import { PATH } from "../../shared/constants/constants";
import { useStyle } from "./styles";

export const Header: FunctionComponent = () => {
  const [logoSrc, setLogoSrc] = useState();
  const { header, container, logo, name } = useStyle();

  useEffect(() => {
    HTTPService.get(PATH.random)
      .then((response) => {
        setLogoSrc(response.data.icon_url);
      })
      .catch();
  }, []);

  return (
    <header className={header}>
      <div className={container}>
        <div className={logo}>
          <img src={logoSrc} alt="logo" />
          <span className={name}>Chuck Norris</span>
        </div>
      </div>
    </header>
  );
};
