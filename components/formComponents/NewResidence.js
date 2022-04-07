// step 1 signup
import { useState } from "react";

import PartSelection from "./PartSelection";
import HomeSelection from "./HomeSelection";
import SizeSelection from "./SizeSelection";
import LocationSelection from "./LocationSelection";
import TimeSelection from "./TimeSelection";
import FurnitureSelection from "./FurnitureSelection";
import GardenSelection from "./GardenSelection";
import HeatingSelection from "./HeatingSelection";
import AmenitiesSelection from "./AmenitiesSelection";
import PictureSelection from "./PictureSelection";
import PrizeSelection from "./PrizeSelection";
import Preview from "./Preview";
import Success from "./Success";
import RestrictionSelection from "./RestrictionSelection";

export default function NewResidence({ step, nextStep, prevStep }) {
  const [state, setState] = useState({
    rent: "",
    type: "",
    rooms: "",
    size: "",
    people: "",
    address: "",
    timeStart: "",
    timeEnd: "",
    furniture: "",
    garden: "",
    gardenEquipment: "",
    heat: "",
    balcony: "",
    elevator: "",
    air: "",
    dishWasher: "",
    washingMachine: "",
    dryer: "",
    bathTub: "",
    garage: "",
    parking: "",
    furnace: "",
    internet: "",
    description: "",
  });

  // handle field change
  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <PartSelection state={state} handleChange={handleChange} />;
    case 2:
      return <HomeSelection state={state} handleChange={handleChange} />;
    case 3:
      return <SizeSelection state={state} handleChange={handleChange} />;
    case 4:
      return (
        <LocationSelection
          state={state}
          handleChange={handleChange}
          setState={setState}
        />
      );
    case 5:
      return <TimeSelection state={state} handleChange={handleChange} />;
    case 6:
      return <FurnitureSelection state={state} handleChange={handleChange} />;
    case 7:
      return <GardenSelection state={state} handleChange={handleChange} />;
    case 8:
      return <HeatingSelection state={state} handleChange={handleChange} />;
    case 9:
      return <AmenitiesSelection state={state} handleChange={handleChange} />;
    case 10:
      return <PictureSelection state={state} handleChange={handleChange} />;
    case 11:
      return <PrizeSelection state={state} handleChange={handleChange} />;
    case 12:
      return <RestrictionSelection state={state} handleChange={handleChange} />;
    case 13:
      return <Preview state={state} handleChange={handleChange} />;
    case 14:
      return <Success state={state} handleChange={handleChange} />;
    default:
  }
}
