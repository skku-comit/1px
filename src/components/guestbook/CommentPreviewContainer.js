import React from "react";
import classes from "./CommentPreviewContainer.module.css";
import CommentPreviewCard from "./CommentPreviewCard";

function CommentPreviewContainer({ comments }) {
  return (
    <>
      {comments.length === 0 && (
        <div className={classes["container2"]}>
          <div style={{ textAlign: "center", color: "black" }}>
            <h4 className={classes['no-text']}>방명록에 첫번째 글을 남겨보세요!</h4>
          </div>
        </div>
      )}
      <div className={classes["container"]}>
        {comments.map((data) => (
          <CommentPreviewCard key={data.id} content={data.content} />
        ))}
      </div>
    </>
  );
}

export default CommentPreviewContainer;
