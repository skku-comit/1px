import CommentModal from "./CommentModal";
import classes from "./NewCommentForm.module.css";
// import { Form } from "react-router-dom";
import submitButton from "../../assets/images/guestbook_submit_button.svg";
import cancelButton from "../../assets/images/guestbook_cancel_button.svg";
const NewCommentForm = ({ cancelHandler }) => {
  const onSubmitHandler = () => {
    //받은 content 여기에서 DB에 바로 전달
  };

  return (
    <CommentModal>
      <div className={classes["container"]}>
        <div className={classes["cancel-button"]} onClick={cancelHandler}>
          <img src={cancelButton} alt="cancel-button" />
        </div>
        <form className={classes["form"]}>
          <label htmlFor="comment" style={{marginLeft: 20, marginTop: 40}}>Comment</label>
          <textarea className={classes["textarea"]} required rows={3} />
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
