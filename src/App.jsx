import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import BookingList from './Components/BookingList/BookingList'
import Confirmation from './Components/Confirmation/Confirmation';
import ThankYou from './Components/Thank-You/Thank-you';

function App() {

  const [currentStep,setCurrentStep] = useState("Search");
  const [date,setDate] = useState();
  const [from,setFrom] = useState();
  const [to,setTo] = useState();
  const [flightNo,setFlightNo] = useState();
  const [time,setTime] = useState();

  console.log(currentStep,date,from,to,flightNo,time)
 
  if(currentStep === "Search"){
    return <Form setDate={setDate} setFrom={setFrom} setTo={setTo} setCurrentStep={setCurrentStep}/>
  }
  else if(currentStep === "Results"){
    return <BookingList date={date} from={from} to={to} setFlightNo={setFlightNo} setCurrentStep={setCurrentStep} setTime={setTime}/>
  }
  else if(currentStep==="Confirmation"){
    return <Confirmation date={date} from={from} to={to} time={time} flightNo={flightNo} setCurrentStep={setCurrentStep}/>
  }
  else if(currentStep==="Thank-You"){
    return <ThankYou date={date} from={from} to={to} time={time} flightNo={flightNo}/>
  }

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
