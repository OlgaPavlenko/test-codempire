import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    marginLeft: "160px",
    marginRight: "160px",
    position: "relative",
  },

  joke: {
    width: "100%",
    minHeight: "162px",
    borderRadius: "25px",
    borderColor: "#422ED4",
    backgroundColor: "#422ED4",
    position: "absolute",
    top: "155px",
  },

  jokeDescription: {
    display: "block",
    paddingTop: "24px",
    size: "20px",
    lineHeight: "30px",
    color: "#FFFF",
  },

  jokeLogo: {
    maxHeight: "258px",
    position: "absolute",
    right: "25px",
  },
}));
