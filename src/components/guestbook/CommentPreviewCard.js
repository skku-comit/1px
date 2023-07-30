// firebase
import { deleteDoc, doc } from "firebase/firestore";

import classes from "./CommentPreviewCard.module.css";

function CommentPreviewCard({ id, content, db }) {

  const deleteComment = async () => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this Comment?");
      if (confirmDelete) {
        const documentRef = doc(db, "comments", id);
        await deleteDoc(documentRef);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes["comment-card"]}>
      <div className={classes["comment-text"]}>{content}</div>
      <button className={classes["delete-button"]} onClick={() => deleteComment()}/>
    </div>
  );
}

export default CommentPreviewCard;
