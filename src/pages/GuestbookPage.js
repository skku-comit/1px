// components
import GuestbookSection from '../components/guestbook/GuestbookSection';

// css
import classes from './GuestbookPage.module.css';

const GuestbookPage = () => {
  return (
    <div className={classes['guestbook-sector']}>
      <GuestbookSection />
    </div>
  );
}

export default GuestbookPage;
