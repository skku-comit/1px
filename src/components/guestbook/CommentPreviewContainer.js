import { useState, useEffect } from "react";

// firebase
import { getDocs, query, orderBy } from "firebase/firestore";
import classes from "./CommentPreviewContainer.module.css";
import CommentPreviewCard from "./CommentPreviewCard";

function CommentPreviewContainer({ collectionRef, db }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      try {
        // Create a query to fetch the comments collection ordered by the 'timestamp' field
        const q = query(collectionRef, orderBy("timestamp", "desc"));

        // Fetch the documents based on the query
        const querySnapshot = await getDocs(q);

        // Map the data and set the comments state
        const commentData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setComments(commentData);
      } catch (err) {
        console.log(err);
      }
    };
    getComment();
  }, []);

  return (
    <>
      {comments.length === 0 && (
        <div className={classes["container2"]}>
          <div style={{ textAlign: "center", color: "black" }}>
            <h4 className={classes["no-text"]}>
              방명록에 첫번째 글을 남겨보세요!
            </h4>
          </div>
        </div>
      )}
      <div className={classes["container"]}>
        {comments.map(({ comment, id }) => (
          <CommentPreviewCard key={id} content={comment} db={db} id={id}/>
        ))}
      </div>
    </>
  );
}

export default CommentPreviewContainer;
