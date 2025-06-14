import { OutRoutineTypes } from "../Types/interface/routines.interface";

const transformInitialValues = (): OutRoutineTypes => ({
  hour: "",
  title: "",
  items: [],
  notes: "",
  macronutrients: [],
  intensity: "",
});

export default transformInitialValues;
