import { useRoutines } from "./apiServices/Routine/useRoutine";

const useServices = () => {
  const routines = new useRoutines();
  return { routines };
};

export default useServices;
