import GuestbookAddButton from "../../assets/images/guestbook_add_button.png";
import classes from "./GuestbookSection.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentPreviewContainer from "./CommentPreviewContainer";
import { useState } from "react";

//여기서 무한스크롤기능 구현하기


const GuestbookSection = () => {
  const [openForm, setOpenForm] = useState(false);
  const openFormHandler = () => {
    setOpenForm(true);
  };
  const closeFormHandler = () => {
    setOpenForm(false);
  };
  return (
    <>
      {openForm && <NewCommentForm cancelHandler={closeFormHandler} />}
      <div className={classes["guestbook-contents"]}>
        <div className={classes["guestbook-titles"]}>
          <div className={classes["guestbook-title"]}>방명록을 남겨주세요</div>
          <div className={classes["guestbook-subtitle"]}>
            비방 / 욕설은 관리자에 의해 삭제될 수 있습니다.
          </div>
        </div>
        <div
          className={classes["guestbook-add-button"]}
          onClick={openFormHandler}
        >
          <img src={GuestbookAddButton} alt="guestbook-add-button" />
        </div>

        <CommentPreviewContainer />
      </div>
    </>
  );
};

export default GuestbookSection;
