import WorkerForm from "./components/WorkerForm";
import GlobalContext from "./context/index";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <GlobalContext>
        <WorkerForm></WorkerForm>
      </GlobalContext>
    </div>
  );
}

export default App;
