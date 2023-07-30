import {useState,useEffect} from "react";

// firebase
import {getDocs} from 'firebase/firestore'
import classes from "./CommentPreviewContainer.module.css";
import CommentPreviewCard from "./CommentPreviewCard";

function CommentPreviewContainer({ collectionRef }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getComment = async () => {
      await getDocs(collectionRef).then((comment) => {
        let commentData = comment.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setComments(commentData)
        }).catch((err) => {
          console.log(err);
        })
      }
    getComment()
    }, [])

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
        {comments.map(({comment,id}) => (
          <CommentPreviewCard key={id} content={comment} />
        ))}
      </div>
    </>
  );
}

export default CommentPreviewContainer;
