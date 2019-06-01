import React from 'react';
import '../ShiftCard.css';
import VolunteerShiftCardModal from './VolunteerShiftCardModal/index';
import AdminShiftCardModal from './AdminShiftCardModal/index';

const ShiftCardModal = ({
  shiftData,
  onHide,
  show,
  handleSelect,
  selected,
  handleDelete,
  handleBook,
  booked,
  isAdmin
}) => {
  const passthroughProps = {
    shiftData,
    onHide,
    show,
    selected,
    handleSelect,
    handleDelete,
    handleBook,
    booked
  };

  return isAdmin ? (
    <AdminShiftCardModal {...passthroughProps} />
  ) : (
    <VolunteerShiftCardModal {...passthroughProps} />
  );
};

export default ShiftCardModal;
