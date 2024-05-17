import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { BookingContext } from '../context/BookingContext';
import { Reservation } from '../models/reservation.interface';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const availableOccasion = ['Birthday', 'Anniversary'];

export const BookingForm = () => {
  const initialState: Reservation = {
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  };
  const { dispatch } = useContext(BookingContext);
  const [formData, setFormData] = useState<Reservation>(initialState);

  const { date, time, guests, occasion } = formData;

  const onChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initialState });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'update_reservation',
      payload: { date, guests, occasion, time },
    });
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      className="reservation-form"
    >
      <label
        className="section-reservation-label"
        htmlFor="date"
        aria-label="Select date"
      >
        Choose date:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={onChange}
        required
        className="reservation-input-date"
      />

      <label
        className="section-reservation-label"
        htmlFor="time"
        aria-label="Select time"
      >
        Choose time:
      </label>
      <select
        id="time"
        name="time"
        onChange={onChange}
        multiple={false}
        required
        className="reservation-select-times"
      >
        {availableTimes.map((times, index) => (
          <option key={index} value={times}>
            {times}
          </option>
        ))}
      </select>

      <label
        className="section-reservation-label"
        htmlFor="guests"
        aria-label="Select guests"
      >
        Number of guests:
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        onChange={onChange}
        value={guests}
        required
        className="reservation-input-guests"
      />

      <label
        className="section-reservation-label"
        htmlFor="occasion"
        aria-label="Select Occasion"
      >
        Occasion:
      </label>
      <select
        id="occasion"
        name="occasion"
        onChange={onChange}
        multiple={false}
        required
        className="reservation-select-occasion"
      >
        {availableOccasion.map((occasions, index) => (
          <option key={index}>{occasions}</option>
        ))}
      </select>
      <input
        className="reservation-form-button"
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
};
