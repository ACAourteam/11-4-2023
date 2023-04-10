import { createUseStyles } from "react-jss";

export const useHomeStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    color: "white",
  },
  top: {
    width: "100%",
    minHeight: "70px",
    position: "relative",
    background: "#535353FF",
    "& div": {
      position: "absolute",
      right: 10,
      top: 10,
    },
  },
  main: {
    marginTop: 60,
    display: "grid",
    gridTemplateColumns: "5fr 3fr",
    background: "#333333",
    textAlign: "center",
  },
  mainLeft: {},

  types: {
    width: "350px",
    height: "55px",
    fontSize: "35px",
    background: "#519A98",
    borderRadius: "5px",
    margin: "auto",
    letterSpacing: 5,
  },

  downArrowIcon: {
    width: "30px",
    height: "30px",
    margin: "10px 0",
  },

  type: {
    color: "#519A98",
    fontWeight: "900",
    letterSpacing: 2,
    fontSize: 20,
    "& div": {
      padding: 3,
      transition: "0.3s",
    },

    "& div span": {
      transition: "0.3s",
      fontSize: "20px",
    },
    "& div span:hover": {
      display: "inline-block",
      color: "orange",
      transform: "scale(1.05)",
    },
  },

  description: {
    width: "70%",
    color: "#9F95EC",
    fontFamily: "verdana",
    margin: "auto",
    padding: "20px",
    transition: "0.5s",
    textAlign: "left",

    "&:hover": {
      color: "orange",
    },
  },
  label: {
    "& button": {
      width: "250px",
      height: "65px",
      fontSize: "35px",
      letterSpacing: 3,
    },
  },
  task: {
    padding: "20px 0",
    display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
  },
  taskType: {
    color: "#519A98FF",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#333333",
  },
  "@media (max-width: 900px)": {
    main: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    tasks: {
      align: "center",
    },
    description: {
      fontSize: 12,
    },
  },
});
