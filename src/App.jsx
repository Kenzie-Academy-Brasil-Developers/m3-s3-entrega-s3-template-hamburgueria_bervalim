import { HomePage } from "./pages/HomePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer />
    </>
  );
};

export default App;
