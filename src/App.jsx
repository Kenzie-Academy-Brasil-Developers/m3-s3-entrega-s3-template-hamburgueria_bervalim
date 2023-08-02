import { HomePage } from "./pages/HomePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" autoClose={1500} />
    </>
  );
};

export default App;
