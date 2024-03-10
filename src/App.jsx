import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import BookingList from './Components/BookingList/BookingList'

function App() {

  const [currentStep,setCurrentStep] = useState("Search");
  const [date,setDate] = useState();
  const [from,setFrom] = useState();
  const [to,setTo] = useState();

  console.log(currentStep,date,from,to)
 
  if(currentStep === "Search"){
    return <Form setDate={setDate} setFrom={setFrom} setTo={setTo} setCurrentStep={setCurrentStep}/>
  }
  else if(currentStep === "Results"){
    return <BookingList date={date} from={from} to={to}/>
  }

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
