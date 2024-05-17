import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

export const useBookingSlot = () => {
  const { state } = useContext(BookingContext);
  const isEmpty = Object.keys(state.date).length;
  return isEmpty ? false : true;
};
