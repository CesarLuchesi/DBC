import { WorkerContextProvider } from "./workers/index";

function GlobalContext({ children }) {
  return <WorkerContextProvider>{children}</WorkerContextProvider>;
}

export default GlobalContext;
