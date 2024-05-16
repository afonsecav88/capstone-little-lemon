import { Dispatch, createContext } from 'react';
import { Reservation } from '../models/reservation.interface';
import { ReservationType } from '../reducer/UpdateTimesReducer';

type PropsBookingContext = {
  state: Reservation;
  dispatch: Dispatch<ReservationType>;
};
export const BookingContext = createContext({} as PropsBookingContext);
