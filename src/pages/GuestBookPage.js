import React from "react";

import GuestbookSection from '../components/GuestbookSection';

import classes from '../css/GuestbookPage.module.css';

function GuestbookPage() {
  return (
    <div className={classes['guestbook-sector']}>
      <GuestbookSection/>
    </div>
  );
}

export default GuestbookPage;
