// imports
import { useState } from "react";

// firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase.config.js";

// components
import CommentModal from "./CommentModal";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = ({ cancelHandler, onAddComment }) => {
  // collection
  const collectionRef = collection(db, "comments");
  const [comment, setComment] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (comment.trim() === "") return; // Prevent empty comments
    
    onAddComment({ id: Date.now(), content: comment });

    try {
      await addDoc(collectionRef, {
        comment: comment,
        timestamp: serverTimestamp(),
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentModal>
      <div className={classes["container"]}>
        <button className={classes["cancel-button"]} onClick={cancelHandler} />
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="comment" style={{ marginLeft: 20, marginTop: 40 }}>
            Comment
          </label>
          <textarea
            className={classes["textarea"]}
            required
            rows={3}
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
