import React, { useState } from "react";
import classes from "./GuestbookSection.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentPreviewContainer from "./CommentPreviewContainer";

const GuestbookSection = () => {
  const [openForm, setOpenForm] = useState(false);
  const [comments, setComments] = useState([]); // track all comments

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  const addNewCommentHandler = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
    // Close the form after submitting
    closeFormHandler();
  };

  return (
    <>
      {openForm && <NewCommentForm cancelHandler={closeFormHandler} onAddComment={addNewCommentHandler} />}
      <div className={classes["guestbook-contents"]}>
        <div className={classes["guestbook-titles"]}>
          <div className={classes["guestbook-title"]}>방명록을 남겨주세요</div>
          <div className={classes["guestbook-subtitle"]}>
            비방 / 욕설은 관리자에 의해 삭제될 수 있습니다.
          </div>
          <button className={classes["guestbook-add-button"]} onClick={openFormHandler} />
        </div>

        <CommentPreviewContainer comments={comments} />
      </div>
    </>
  );
};

export default GuestbookSection;
