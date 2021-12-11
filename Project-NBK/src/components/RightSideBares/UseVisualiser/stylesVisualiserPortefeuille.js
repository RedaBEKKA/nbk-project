import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ContainerX1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  Container: {
    display: "flex",
    width: "96%",
    flexDirection: "column",
    padding: "5px",
    background: "#fff",
    borderRadius: "8px",
    alignItems: "center",
    margin: "15px 0",
  },

  bodyInfo: {
    borderRadius: "6px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  Card: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
  CardS: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px",
    margin: "12px 0 0 0 ",
  },
  Content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectitle: {
    color: "#000",
    opacity: 0.6,
    fontSize: "18px",
    fontWeight: "700",
    padding: "0px 0px 0px 10px",
  },
  titleS: {
    fontSize: 20,
    fontWeight: "bold",
    marignBottom: 10,
  },
  ContentS: {
    marginBottom: 15,
  },
  sectitleS: {
    color: "#000",
    opacity: 0.6,
    fontSize: "18px",
    fontWeight: "700",
    padding: "0px 0px 0px 10px",
    margin: "15px 0",
  },
  PaperContainer: {
    display: "flex",
    padding: 20,
  },
  boxConatiner: {
    width: "45%",
    marginRight: "15px",
  },
}));

export default useStyles;
