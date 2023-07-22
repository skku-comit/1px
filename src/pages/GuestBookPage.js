import React from 'react';

import GuestbookSection from '../components/guestbook/GuestbookSection';

import classes from './GuestbookPage.module.css';

function GuestbookPage() {
  return (
    <div className={classes['guestbook-sector']}>
      <GuestbookSection />
    </div>
  );
}

export default GuestbookPage;
