/*
Types:
* Success
* Error
*/

import { FaTimesCircle, FaCheck } from "react-icons/fa";

export default function Flash({ type, message }) {
  return (
    <div className={`flash flash-${type}`}>
      {type === "success" && <FaCheck />}
      {type === "error" && <FaTimesCircle />}
      {message}
    </div>
  );
}

Flash.defaultProps = {
  type: "success",
};
