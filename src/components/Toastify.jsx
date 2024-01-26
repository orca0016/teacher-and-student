import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
const Tostify = () => {
  const notify = () => toast(" موفق بودددد !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
};

export default Tostify;
