import { Router } from "components/Router";
import { useHandleAuth } from "hooks/useHandleAuth";
import { useFetchTexts } from "hooks/useFetchTexts";
import "./App.css";
function App() {
  useHandleAuth();
  useFetchTexts();

  return (
    <>
      <Router />
    </>
  );
}

export default App;
