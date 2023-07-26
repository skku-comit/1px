import React from "react";
import classes from "./CommentPreviewContainer.module.css";
import CommentPreviewCard from "./CommentPreviewCard";

function CommentPreviewContainer({ comments }) {
  return (
    <div className={classes["container"]}>
      {comments.map((data) => (
        <CommentPreviewCard key={data.id} content={data.content} />
      ))}
    </div>
  );
}

export default CommentPreviewContainer;
