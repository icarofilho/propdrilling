import { PropTypes } from "prop-types";

export const Button = ({ handlerIncrease }) => {
  return <button onClick={handlerIncrease}>Aumentar</button>;
};

Button.propTypes = {
  handlerIncrease: PropTypes.func,
};
