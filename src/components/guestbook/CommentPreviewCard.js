import classes from "./CommentPreviewCard.module.css";

function CommentPreviewCard({ content }) {
  return (
    <div className={classes["comment-card"]}>
      <div className={classes["comment-text"]}>{content}</div>
      <button className={classes["delete-button"]}/>
    </div>
  );
}

export default CommentPreviewCard;
