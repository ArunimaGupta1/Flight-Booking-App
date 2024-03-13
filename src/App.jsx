import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'; // Import the Header component
import Form from './Components/Form/Form';
import BookingList from './Components/BookingList/BookingList';
import Confirmation from './Components/Confirmation/Confirmation';
import ThankYou from './Components/Thank-You/Thank-you';
import Footer from './Components/Footer/Footer';

function App() {
  const [currentStep, setCurrentStep] = useState("Search");
  const [date, setDate] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [flightNo, setFlightNo] = useState();
  const [time, setTime] = useState();
  const [firstname, setFirstname] = useState();

  console.log(currentStep, date, from, to, flightNo, time);

  let content = null; // Initialize content variable

  // Determine which component to render based on the currentStep state
  switch (currentStep) {
    case "Search":
      content = <Form setDate={setDate} setFrom={setFrom} setTo={setTo} setCurrentStep={setCurrentStep} />;
      break;
    case "Results":
      content = <BookingList date={date} from={from} to={to} setFlightNo={setFlightNo} setCurrentStep={setCurrentStep} setTime={setTime} />;
      break;
    case "Confirmation":
      content = <Confirmation date={date} from={from} to={to} time={time} flightNo={flightNo} setCurrentStep={setCurrentStep} setFirstname={setFirstname} />;
      break;
    case "Thank-You":
      content = <ThankYou date={date} from={from} to={to} time={time} flightNo={flightNo} firstname={firstname} />;
      break;
    default:
      content = <Form setDate={setDate} setFrom={setFrom} setTo={setTo} setCurrentStep={setCurrentStep} />;
  }

  return (
    <>
      <Header /> {/* Render the Header component */}
      {content} {/* Render the determined component */}
      <br/>
      <br/>
      <Footer/>
    </>
  );
}

export default App;
