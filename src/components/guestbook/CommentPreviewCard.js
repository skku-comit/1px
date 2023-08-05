// firebase
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react"; // Import useState

import classes from "./CommentPreviewCard.module.css";

function CommentPreviewCard({ id, content, db }) {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const deleteComment = async () => {
    try {
      setShowModal(true); // Show the modal when delete is clicked
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirm = async () => {
    try {
      if (inputValue === "0707") {
        const documentRef = doc(db, "comments", id);
        await deleteDoc(documentRef);
        window.location.reload();
      } else {
        alert("관리자 코드가 틀렸습니다.");
      }
      setShowModal(false); // Hide the modal after processing
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setShowModal(false); // Hide the modal if cancel is clicked
  };

  return (
    <div className={classes["comment-card"]}>
      <div className={classes["comment-text"]}>{content}</div>
      {!showModal && (
        <button className={classes["delete-button"]} onClick={deleteComment} />
      )}

      {/* Custom modal */}
      {showModal && (
        <div className={classes["modal"]}>
          <div className={classes["modal-content"]}>
            <p>관리자 코드를 입력하세요:</p>
            <input
              type="password" // Use type="password" to hide the entered value
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className={classes["button-container"]}>
              <button onClick={handleConfirm}>확인</button>
              <button
                className={classes["deletecancel-button"]}
                onClick={handleCancel}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentPreviewCard;
