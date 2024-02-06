import PropTypes from "prop-types";
import buttonStyles from "./Button.module.css";

const Button = ({ children }) => {
  return <div className={buttonStyles.Button}>{children}</div>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
