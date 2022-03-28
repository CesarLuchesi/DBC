import { createContext, useState } from "react";

const DEFAULT_CONTEXT = {
  state: {
    workersList: [],
  },
  setState: () => {},
};

const WorkerContext = createContext(DEFAULT_CONTEXT);

function WorkerContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_CONTEXT.state);

  return (
    <WorkerContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </WorkerContext.Provider>
  );
}

export { WorkerContextProvider };
export default WorkerContext;
