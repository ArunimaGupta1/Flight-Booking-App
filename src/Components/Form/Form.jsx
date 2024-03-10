import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import cities from "./cities.json";
import styles from "./Form.module.css";
import PropTypes from 'prop-types';

function Form({setDate,setFrom,setTo,setCurrentStep}) {
  const cityOptions = useMemo(
    () =>
      cities.map((city, index) => ({
        name: city,
        id: index,
      })),
    []
  ); // Memoization

  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setTo(form.getValues("Arrival"))
    setFrom(form.getValues("Departure"))
    setDate(form.getValues("dd"))
    setCurrentStep("Results")
    console.log(data);
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.departure}>
          <label htmlFor="Departure">Departure</label>
          <select
            name="Departure"
            {...register("Departure", {
              required: "Departure city is required",
            })}
          >
            <option value="">Select Departure city</option>
            {cityOptions.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          <p className={styles.error}>{errors["Departure"]?.message}</p>

          <label htmlFor="dd">Departure Date</label>
          <input
            name="dd"
            type="date"
            {...register("dd", { required: "Enter departure date" })}
          />
          <p className={styles.error}>{errors["dd"]?.message}</p>
        </div>
        <br />
        <div className={styles.return}>
          <label htmlFor="Arrival">Arrival</label>
          <select
            name="Arrival"
            {...register("Arrival", {
              required: "Arrival city is required",
              validate: (value) => {
                const departureCity = form.getValues("Departure");
                if (value === departureCity) {
                  return "Arrival city cannot be the same as departure city";
                }
                return true;
              },
            })}
          >
            <option value="">Select Arrival city</option>
            {cityOptions.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          <p className={styles.error}>{errors["Arrival"]?.message}</p>

         
        </div>

        <button type="submit">Explore</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
Form.propTypes = {
  setDate: PropTypes.func.isRequired,
  setFrom: PropTypes.func.isRequired,
  setTo: PropTypes.func.isRequired,
  setCurrentStep: PropTypes.func.isRequired,

};
export default Form;
