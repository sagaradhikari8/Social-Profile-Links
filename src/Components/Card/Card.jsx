import cardImg from "../../assets/avatar-jessica.jpeg";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImg}
        src={cardImg}
        alt=""
        width="80"
        height="80"
      />
      <h3>Jessica Randell</h3>
      <p className={styles.Location}>London, United Kingdom</p>
      <p className={styles.Description}>
        "Front-end developer and avid reader"
      </p>
      <div className={styles.Butt}>
        <Button>Github</Button>
      </div>
      <div>
        <Button>Frontend Mentor</Button>
      </div>
      <div>
        <Button>LinkedIn</Button>
      </div>
      <div>
        <Button>Twitter</Button>
      </div>
      <div>
        <Button>Instagram</Button>
      </div>
    </div>
  );
};
export default Card;
