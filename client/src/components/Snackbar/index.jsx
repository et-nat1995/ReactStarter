import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import API from "../../utils/index";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function SnackBarCentered() {
  const [state, setState] = React.useState({
    open: false,
    text: "",
  });

  const {open, text, Transition} = state;

  const handleOnClick = Transition => () => {
    API.consoleButton()
    .then(data => setState({ open: true, text: data.data, Transition: Transition}))
      .catch(err => console.log(err));
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  }

  return (
    <div>
      <Button onClick={handleOnClick(SlideTransition)} variant="contained" color="primary">Hello There</Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        TransitionComponent={Transition}
        message={<span id="message-id">{text}</span>}
        autoHideDuration={2000}
      />
    </div>
  );
}
