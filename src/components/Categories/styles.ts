import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  main: {
    marginTop: "60px",
    marginBottom: "60px",
    backgroundColor: "white",
  },

  container: {
    marginLeft: "160px",
    marginRight: "160px",
  },

  categoriesItem: {
    font: "Raleway",
    fontSize: "50px",
  },

  categoryList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: "20px",
    columnGap: "20px",
  },

  categoryLink: {
    flex: "0 0 15%",
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderRadius: "20px",
    minWidth: "170px",
    minHeight: "57px",
    fontSize: "16px",
    color: "#1C1C39",
    lineHeight: "19px",
    boxShadow: "5px 5px 5px lightgray",
    transitionDuration: "250ms",
    boxSizing: "border-box",

    "&:hover": {
      backgroundColor: "#422ED4",
      color: "#FFFFFF",
      cursor: "pointer",
    },
  },
}));
