// imports
import { useState } from "react";

// components
import CommentModal from "./CommentModal";
import classes from "./NewCommentForm.module.css";
import submitButton from "../../assets/images/guestbook_submit_button.svg";
import cancelButton from "../../assets/images/guestbook_cancel_button.svg";

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
        <div className={classes["cancel-button"]} onClick={cancelHandler}>
          <img src={cancelButton} alt="cancel-button" />
        </div>
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

        <div className={classes["submit-button"]} onClick={onSubmitHandler}>
          <img
            className={classes["submit-button_img"]}
            src={submitButton}
            alt="submit-button"
          />
        </div>
      </div>
    </CommentModal>
  );
};

export default NewCommentForm;

//   return (
//     <CommentModal>
//       <div className={classes["container"]}>
//         <div className={classes["cancel-button"]} onClick={cancelHandler}>
//           <img src={cancelButton} alt="cancel-button" />
//         </div>
//         <form className={classes["form"]} onSubmit={onSubmitHandler}>
//           <label htmlFor="comment" style={{ marginLeft: 20, marginTop: 40 }}>
//             Comment
//           </label>
//           <textarea
//             className={classes["textarea"]}
//             required
//             rows={3}
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//           <div className={classes["submit-button"]} onClick={onSubmitHandler}>
//             <img className={classes["submit-button_img"]} src={submitButton} alt="submit-button" />
//           </div>
//         </form>
//       </div>
//     </CommentModal>
//   );
// };

// export default NewCommentForm;
