import { useReducer } from 'react';
import { UpdateTimesReducer } from '../reducer/UpdateTimesReducer';
import { BookingContext } from './BookingContext';
import { Reservation } from '../models/reservation.interface';

interface BookingProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const initState: Reservation = {
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  };

  const [state, dispatch] = useReducer(UpdateTimesReducer, initState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
