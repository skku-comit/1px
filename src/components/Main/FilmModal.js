import React from 'react';
import ReactDom from 'react-dom';
import classes from './Filmmodal.module.css';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}

function OverlayModal(props) {
  return (
    <div className={classes.overlaymodal}>
      <div className={classes.header}>Header</div>
      <div className={classes.content}>content</div>
    </div>
  );
}

function FilmModal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClickBackdrop}></Backdrop>,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <OverlayModal></OverlayModal>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
}

export default FilmModal;
