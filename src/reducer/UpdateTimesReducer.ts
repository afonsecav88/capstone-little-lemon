import { Reservation } from '../models/reservation.interface';

export type ReservationType =
  | { type: 'change_time'; payload: string }
  | {
      type: 'update_reservation';
      payload: Reservation;
    };

export const UpdateTimesReducer = (
  state: Reservation,
  action: ReservationType
) => {
  switch (action.type) {
    case 'update_reservation': {
      return {
        ...state,
        date: action.payload.date,
        time: action.payload.time,
        guests: action.payload.guests,
        occasion: action.payload.occasion,
      };
    }
    default: {
      return state;
    }
  }
};
