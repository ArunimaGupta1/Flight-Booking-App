import PropTypes from "prop-types";

function ThankYou({date,from,to,time,flightNo,firstname}) {
  const generatePNR = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const length = 6; // Desired length of the PNR number
  
    for (let i = 0; i < length; i++) {
      // Generate a random index within the characters string length
      const randomIndex = Math.floor(Math.random() * characters.length);
      // Append the character at the random index to the result
      result += characters.charAt(randomIndex);
    }
  
    return result;
  };
  return (
    <div>
      <p>Dear {firstname}</p>
      <p>Thank you</p>
      <p>Your ticket is generated from {from} to {to} at {time} on {date} via flight {flightNo}.</p>
      <p>The PNR number is {generatePNR()}</p>
    </div>
  )
}

ThankYou.propTypes = {
  date: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  flightNo: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired
};

export default ThankYou
