import { Router } from "components/Router";
import { useHandleAuth } from "hooks/useHandleAuth";
import "./App.css";
function App() {
  useHandleAuth();

  return (
    <>
      <Router />
    </>
  );
}

export default App;
