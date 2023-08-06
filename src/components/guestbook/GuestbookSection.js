// imports
import { useState } from "react";

// components
import NewCommentForm from "./NewCommentForm";
import CommentPreviewContainer from "./CommentPreviewContainer";

// css
import classes from "./GuestbookSection.module.css";

// firebase
import { collection } from "firebase/firestore";
import { db } from "../../services/firebase.config.js";

const GuestbookSection = () => {
  const [openForm, setOpenForm] = useState(false);

  const collectionRef = collection(db, "comments");

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  return (
    <>
      {openForm && (
        <NewCommentForm
          cancelHandler={closeFormHandler}
          collectionRef={collectionRef}
        />
      )}
      <div className={classes["guestbook-contents"]}>
        <div className={classes["guestbook-title"]}>방명록을 남겨주세요</div>
        <div className={classes["guestbook-subtitle"]}>
          비방 / 욕설은 관리자에 의해 삭제될 수 있습니다.
        </div>
        <div className={classes["button-container"]}>
          <button
            className={classes["guestbook-add-button"]}
            onClick={openFormHandler}
          />
        </div>

        <CommentPreviewContainer collectionRef={collectionRef} db={db} />
      </div>
    </>
  );
};

export default GuestbookSection;
