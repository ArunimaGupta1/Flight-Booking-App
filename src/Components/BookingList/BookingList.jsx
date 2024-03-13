import { useMemo } from 'react';
import PropTypes from 'prop-types';
import flights from './Flights.json';
import styles from './BookingList.module.css';


function BookingList({ date, from, to, setFlightNo,setCurrentStep,setTime }) {
    const filteredFlights = useMemo(() => {
        return flights.filter(flight => {
            return (
                flight.date === date &&
                flight.departure === from &&
                flight.arrival === to
            );
        });
    }, [date, from, to]);


    return (
        <div className={styles['booking-list-container']}>
            <h2 className={styles['booking-list-header']}>Available Flights</h2>
            {filteredFlights.length > 0 ? (
                <ul>
                    {filteredFlights.map((flight, index) => (
                        <li key={index} className={styles['booking-list-item']}>
                            <p>ID: {flight.id}</p>
                            <p>Flight Number: {flight.flight_no}</p>
                            <p>Departure: {flight.departure}</p>
                            <p>Arrival: {flight.arrival}</p>
                            <p>Time: {flight.time}</p>
                            <button onClick={() =>{
                                setFlightNo(flight.flight_no)
                                setCurrentStep('Confirmation')
                                setTime(flight.time)
                            }}>Book Now</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles['no-flights-message']}>No flights available for the selected criteria.</p>
            )}
        </div>
    );
}

BookingList.propTypes = {
    date: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    setCurrentStep: PropTypes.func.isRequired,
    setTime: PropTypes.func.isRequired,
    setFlightNo:PropTypes.func.isRequired
};

export default BookingList;
