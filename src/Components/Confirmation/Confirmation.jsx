import PropTypes from 'prop-types';


function Confirmation({date,from,to,flightNo,time,setCurrentStep}) {
  return (
    <div>
      <h4>Confirmation</h4>
      <p>Your selected flight information</p>
      <p>{flightNo}</p>
      <p>{from}</p>
      <p>{to}</p>
      <p>{date}</p>
      <p>{time}</p>
      <button onClick={() =>setCurrentStep('Thank-You')}>Confirm</button>
    </div>
  )
}

Confirmation.propTypes = {
    date: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    flightNo: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    setCurrentStep: PropTypes.func.isRequired,
};

export default Confirmation
