import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [basicInfo, setBasicInfo] = useState({
    beerName: "",
    beerStyle: "",
    targetOG: "",
    targetABV: "",
    targetVolume: "",
  });
  const [grainBill, setGrainBill] = useState([]);
  const [hopSchedule, setHopSchedule] = useState([]);
  const [adjuncts, setAdjuncts] = useState([]);
  const [notes, setNotes] = useState("");

  const addBasicInfo = (basicInfo) => setBasicInfo(basicInfo);

  const addGrain = (grain) => {
    setAdjuncts((prevGrain) => [...prevGrain, grain]);
  };

  const addHop = (hop) => {
    setHopSchedule((prevHops) => [...prevHops, hop]);
  };

  const addAdjunct = (adjunct) => {
    setAdjuncts((prevAdjuncts) => [...prevAdjuncts, adjunct]);
  };

  const updateNotes = (text) => {
    setNotes(text);
  };

  return (
    <DataContext.Provider
      value={{
        basicInfo,
        setBasicInfo,
        grainBill,
        setGrainBill,
        hopSchedule,
        setHopSchedule,
        adjuncts,
        setAdjuncts,
        notes,
        setNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
