import { useEffect } from "react";

//step 13 preview of your rental along with all your input information
export default function Preview({ state, handleChange }) {
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
}
