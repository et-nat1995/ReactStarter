import React from "react";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from '@material-ui/icons/Error';
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
  error: ErrorIcon
};

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
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
  return <Slide {...props} direction="left" />;
}

export default (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    text: "",
    type: "",
    Icon : ""
  });

  const { open, text, Transition , type, Icon} = state;

  const handleOnClick = (Transition) => () => {
    API.consoleButton()
      .then((data) =>
        setState({ open: true, text: data.data, Transition: Transition, type: classes.success, Icon: variantIcons["success"] })
      )
      .catch((err) => {
        setState({ open: true, text: "There has been an error", Transition: Transition, type: classes.error, Icon: variantIcons["error"] });
        console.log(err);
      });
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
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        TransitionComponent={Transition}
        autoHideDuration={2000}
      >
        <SnackbarContent
          className={type}
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
