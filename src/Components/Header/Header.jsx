import pic from '../../assets/pic.jpg';
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header-container"]}>
    <img src={pic} alt='pic' className={styles["header-image"]} />
    <br /><br />
  </div>
  )
}

export default Header
