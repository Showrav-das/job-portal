import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import StepFive from "./components/common/StepFive";
import StepFour from "./components/common/StepFour";
import StepOne from "./components/common/StepOne";
import StepThree from "./components/common/StepThree";
import StepTwo from "./components/common/StepTwo";
import FullTime from "./pages/FullTime";
import Home from "./pages/Home";
import PartTime from "./pages/PartTime";
import Confirmation from "./components/common/Confirmation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teilzeit" element={<PartTime />} />
          <Route path="vollzeit" element={<FullTime />} />
          <Route path="/:id/step-one" element={<StepOne />} />
          <Route path="/:id/step-two" element={<StepTwo />} />
          <Route path="/:id/step-three" element={<StepThree />} />
          <Route path="/:id/step-four" element={<StepFour />} />
          <Route path="/:id/step-five" element={<StepFive />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
