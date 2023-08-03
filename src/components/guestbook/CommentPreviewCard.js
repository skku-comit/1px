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
        alert("틀렸습니다.");
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
      <button className={classes["delete-button"]} onClick={deleteComment} />

      {/* Custom modal */}
      {showModal && (
        <div className={classes["modal"]}>
          <div className={classes["modal-content"]}>
            <span className={classes["close"]} onClick={handleCancel}>
              &times;
            </span>
            <p>관리자 코드를 입력하세요:</p>
            <input
              type="password" // Use type="password" to hide the entered value
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleConfirm}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentPreviewCard;
