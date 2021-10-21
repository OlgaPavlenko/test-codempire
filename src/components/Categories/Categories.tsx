import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useStyle } from "./styles";
import HTTPService from "../../services/httpService";
import { PATH } from "../../shared/constants/constants";
import { getJoke } from "../../store/slices/jokeSlice";

export const Categories: FunctionComponent = () => {
  const [categories, setCategories] = useState([]);
  const { main, container, categoriesItem, categoryList, categoryLink } =
    useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    HTTPService.get(PATH.categories).then(({ data }) => {
      setCategories(data);
    });
  }, []);

  const onClickJokesButton = (event: any): void => {
    HTTPService.get(`${PATH.random}?category=${event.target.value}`).then(
      (response) => dispatch(getJoke(response.data.value))
    );
  };

  return (
    <div className={main}>
      <div className={container}>
        <h1 className={categoriesItem}>Categories</h1>
        <div className={categoryList}>
          {categories.map((category: string, index) => (
            <button
              key={index}
              value={category}
              onClick={onClickJokesButton}
              className={categoryLink}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
