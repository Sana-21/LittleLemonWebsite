import './BookingForm.css';
import { useState } from 'react';
function BookingForm({onClose , onAddReservation}) {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onAddReservation(formData);
        setFormData({ name: '', date: '', time: '', guests: '' });
      };
    
    return (
    <div className='form-container'>
        <form className= "booking-form">
          <h2>Reserve a Table</h2>

          <label htmlFor="name">Enter your name</label>
          <input type="text" id="res-name" onChange={handleChange} />
  
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" onChange={handleChange}/>
  
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" onChange={handleChange}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
  
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={handleChange}
          />
  
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Proposal</option>
            <option>Other</option>
            onChange={handleChange}
          </select>
  
          <div className='form-btns'>
          <button className="submit-btn" type="submit" onClick={handleSubmit}>Confirm</button>
          <button className="cancel-btn" type="button" onClick={onClose}>Cancel</button>
          </div> 
        </form>
      </div>
    );
  }
  
export default BookingForm;