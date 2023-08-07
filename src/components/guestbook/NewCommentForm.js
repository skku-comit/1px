// imports
import { useState } from "react";

// firebase
import { addDoc, serverTimestamp } from "firebase/firestore";

// components
import CommentModal from "./CommentModal";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = ({ cancelHandler, collectionRef }) => {
  const [comment, setComment] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (comment.trim() === "") return;

    try {
      await addDoc(collectionRef, {
        comment: comment,
        timestamp: serverTimestamp(),
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentModal>
      <div className={classes["container"]}>
        <button className={classes["cancel-button"]} onClick={cancelHandler} />
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="comment" className={classes["comment-title"]}>
            Comment
          </label>
          <textarea
            className={classes["textarea"]}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button className={classes["submit-button"]} />
        </form>
      </div>
    </CommentModal>
  );
};

export default NewCommentForm;
