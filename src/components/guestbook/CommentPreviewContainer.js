import { useState, useEffect, cloneElement, useRef } from "react";

// firebase
import { getDocs, query, orderBy } from "firebase/firestore";
import classes from "./CommentPreviewContainer.module.css";
import CommentPreviewCard from "./CommentPreviewCard";

const CommentPreviewContainer = ({ collectionRef, db }) => {
  // code for infinite scroll
  const [keepObserve, setKeepObserve] = useState(true);
  const stopObserve = () => {setKeepObserve(false)};
  const [loadCommentAmount, setLoadCommentAmount] = useState(3); // initial number of comments being shown.
  const [isloading, setIsloading] = useState(false);
  const footerRef = useRef(); //if the footer is observed, more comments are loaded.

  const options = { root: null, rootMargin: "0px 0px 0px 0px", threshold: 1 };
  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (keepObserve && entry.isIntersecting) {
        console.log(keepObserve);
        setLoadCommentAmount((val) => {
          return val + 9;
        });
        setIsloading(true);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersect, options);
  useEffect(() => {
    observer.observe(footerRef.current);
  }, []);

  const [comments, setComments] = useState([]);
  const [partialComments, setPartialComments] = useState([]);

  useEffect(() => {
    const parseComment = () =>
      //comment들 중에서 loadCommentAmount개만 잘라서 partialComment배열 생성
      {
        if (comments.length <= loadCommentAmount) {
          console.log("bigger");
          setKeepObserve(false);
          setPartialComments(comments);
        } else {
          setPartialComments(comments.slice(0, loadCommentAmount));
        }
        // console.log("comments.length: " + comments.length);
        // console.log("loadCommentAmount: " + loadCommentAmount);
        // console.log(partialComments);
      };
    setTimeout(()=>{
    parseComment();
    setIsloading(false);
    },500);
  }, [loadCommentAmount, comments]);
  //end of code for infinite scroll

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
    setIsloading(true);
    getComment();
  }, [collectionRef]);

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
        {partialComments.map(({ comment, id }) => (
          <CommentPreviewCard key={id} content={comment} db={db} id={id} />
        ))}
      </div>
      {isloading && <div style={{ textAlign: "center" }}>Loading...</div>}
      <div style={{ height: "1px" }} ref={footerRef}></div>
    </>
  );
};

export default CommentPreviewContainer;
