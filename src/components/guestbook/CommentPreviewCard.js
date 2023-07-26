import classes from './CommentPreviewCard.module.css';

function CommentPreviewCard({content}){
   
    return(
        <div className={classes['comment-card']}>
            <div className={classes['text']}>
                {content}
            </div>
        </div>
    );
}

export default CommentPreviewCard;