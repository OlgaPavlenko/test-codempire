import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  header: {
    width: "100%",
    backgroundColor: "#422ED4",
  },

  container: {
    marginLeft: "160px",
    marginRight: "160px",
  },

  logo: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },

  name: {
    color: "#FFFFFF",
    font: "Raleway",
    fontSize: "16px",
    fontWeight: 800,
  },
}));
