import classes from './CommentPreviewCard.module.css';
import cardImg from '../../assets/images/guestbook_commentCard.svg';
function CommentPreviewCard({content}){
   
    return(
        <div className={classes['comment-card']}>
            <img className = {classes['comment-card_img']} src={cardImg} alt="comment_card"></img>
            <div className={classes['text']}>
                {content.content}
            </div>
        </div>
    );

    
}

export default CommentPreviewCard;