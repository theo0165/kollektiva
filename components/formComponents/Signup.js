// step 1 signup
import { useState } from "react";

import PartSelection from "./PartSelection";
import HomeSelection from "./Homeselection";

export default function Signup() {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // go back to previous step
  const prevStep = () => {
    const { step } = state;
    setState({ step: step - 1 });
  };

  // proceed to the next step
  const nextStep = () => {
    const { step } = state;
    setState({ step: step + 1 });
  };

  // handle field change
  const handleChange = (input) => (e) => {
    setState({ [input]: e.target.value });
  };

  const { step } = state;
  const { firstName, lastName, email, password } = state;
  const values = { firstName, lastName, email, password };

  switch (step) {
    case 1:
      return <PartSelection />;
    case 2:
      return <HomeSelection />;
    case 3:
      return <SizeSelection />;
    case 4:
      return <LocationSelection />;
    case 5:
      return <TimeSelection />;
    case 6:
      return <FurnitureSelection />;
    case 7:
      return <GardenSelection />;
    case 8:
      return <HeatingSelection />;
    case 9:
      return <AmenitiesSelection />;
    case 10:
      return <PictureSelection />;
    case 11:
      return <Preview />;
    case 12:
      return <Success />;
    default:
  }
}
