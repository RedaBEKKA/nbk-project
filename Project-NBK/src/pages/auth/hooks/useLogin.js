import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required();

const drawerWidth = 800;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    padding: 10,
  },
  loginCarousel: {
    height: "100vh",
    marginRight: 400,
  },
  carouselImages: {
    height: "100vh",
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
  boxForm: {
    backgroundColor: "#fff",
    padding: 20,
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    width: drawerWidth,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "#fff",
      padding:"30px 0",
      
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#fff",
      padding:"30px 0"
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "101%",
      borderRadius: "6px",
      outline: "hidden",
      padding:"30px 0"

    },
  },
  boxLogo: {
    width: "60%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  submit: {
    background: "#237a57",
    color: "#fff",
    borderRadius: 15,
    width: "75%",
    alignSelf: "center",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  inputStyles: {
    width: "80%",
    height: "80%",
    "& .Mui-focused": {
      color: "#237a57",
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
      },
      "&:hover fieldset": {
        border: "2px solid #237a57",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #237a57",
      },
    },
  },

  PaperSmall: {
    margin: "20px",
    height: "80%",
  },
  // [theme.breakpoints.down("lg")]: {
  //   margin: "10px",
  //   backgroundColor: "#ccc",
  //   width: "60%",
  //   height: "100%",

  // },
  [theme.breakpoints.down("md")]: {
    margin: "10px",
    backgroundColor: "#ccc",
    width: "60%",
    height: "60%",
  },
}));

export default function useLogin() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matches2 = useMediaQuery(theme.breakpoints.up("xl"));
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch({ type: "LOGIN_REQUEST", payload: data });
  };

  return {
    classes,
    matches,
    matches2,
    auth,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}
