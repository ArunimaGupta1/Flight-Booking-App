import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./Confirmation.module.css";

function Confirmation({ date, from, to, flightNo, time, setCurrentStep }) {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
    setCurrentStep('Thank-You')
  };

  return (
    <div className={styles["confirmation-container"]}>
      <h4 className={styles["confirmation-title"]}>Confirmation</h4>
      <div className={styles["confirmation-info"]}>
        <p>Your selected flight information</p>
        <p>Flight Number: {flightNo}</p>
        <p>Departure: {from}</p>
        <p>Arrival: {to}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>

      <form className={styles["confirmation-form"]} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname" className={styles["confirmation-label"]}>First Name</label>
        <input type="text" name="firstname" {...register("firstname")} className={styles["confirmation-input"]} />

        <label htmlFor="lastname" className={styles["confirmation-label"]}>Last Name</label>
        <input type="text" name="lastname" {...register("lastname")} className={styles["confirmation-input"]} />

        <label htmlFor="age" className={styles["confirmation-label"]}>Age</label>
        <input type="number" name="age" {...register("age")} className={styles["confirmation-input"]} />
        
        <button type="submit" className={styles["confirmation-button"]}>Confirm</button>
      </form>

      <DevTool control={control} />
    </div>
  );
}

Confirmation.propTypes = {
  date: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  flightNo: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};

export default Confirmation;
