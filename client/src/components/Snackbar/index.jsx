import React from "react";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarContent } from "@material-ui/core";
import API from "../../utils/index";
import MyButton from "../Button";
import "./index.scss";

const variantIcons = {
  success: CheckCircleIcon,
};

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  action: {
    padding: 0
  }
}));

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function SnackBarCentered() {
  const classes = useStyles();
  const Icon = variantIcons["success"];
  const [state, setState] = React.useState({
    open: false,
    text: "",
  });

  const { open, text, Transition } = state;

  const handleOnClick = (Transition) => () => {
    API.consoleButton()
      .then((data) =>
        setState({ open: true, text: data.data, Transition: Transition })
      )
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <MyButton
        onClick={handleOnClick(SlideTransition)}
        variant="contained"
        color="blue"
      >
        Hello There
      </MyButton>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        TransitionComponent={Transition}
        autoHideDuration={2000}
      >
        <SnackbarContent
          className={classes.success}
          message={
            <span id="message-id" className={classes.message}>
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {text}
            </span>
          }
        />
      </Snackbar>
    </div>
  );
}
