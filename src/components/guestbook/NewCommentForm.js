// imports
import { useState } from "react";

// components
import CommentModal from "./CommentModal";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = ({ cancelHandler, onAddComment }) => {
  const [comment, setComment] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.trim() === "") return; // Prevent empty comments
    onAddComment({ id: Date.now(), content: comment });
    setComment(""); // Clear the form
  };

  return (
    <CommentModal>
      <div className={classes["container"]}>
        <button className={classes["cancel-button"]} onClick={cancelHandler}/>
        <form className={classes["form"]}>
          <label htmlFor="comment" style={{ marginLeft: 20, marginTop: 40 }}>
            Comment
          </label>
          <textarea
            className={classes["textarea"]}
            required
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>

        <button className={classes["submit-button"]} onClick={onSubmitHandler}/>
      </div>
    </CommentModal>
  );
};

export default NewCommentForm;
