import GuestbookAddButton from "../assets/images/guestbook_add_button.png";
import classes from "../css/GuestbookSection.module.css";

const GuestbookSection = () => {
  return (
    <div className={classes["guestbook-contents"]}>
      <div className={classes["guestbook-titles"]}>
        <div className={classes['guestbook-title']}>방명록을 남겨주세요</div>
        <div className={classes['guestbook-subtitle']}>비방 / 욕설은 관리자에 의해 삭제될 수 있습니다.</div>
      </div>
      <div className={classes["guestbook-add-button"]}>
        <img src={GuestbookAddButton} alt="guestbook-add-button" />
      </div>

      <div></div>
    </div>
  );
};

export default GuestbookSection;
