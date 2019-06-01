import React from 'react';
import AdminShiftsPage from './AdminShiftsPage';
import VolunteerShiftsPage from './VolunteerShiftsPage/VolunteerShiftsPage';
import './ShiftsPage.css';

const ShiftsPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.isAdmin) {
    return <AdminShiftsPage />;
  }
  return <VolunteerShiftsPage />;
};

export default ShiftsPage;