import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App.jsx";

import Login from "../pages/Login.jsx";

import { Slide, ToastContainer } from "react-toastify";
import Dashboard from "../pages/Dashboard.jsx";
import NotFound from "../pages/NotFound.jsx";
import MainLayout from "./MainLayout";


import "react-toastify/dist/ReactToastify.css";
import welcome from "../assets/svg/welcome.svg";
import AddMore from "../pages/AddMore.jsx";
import ShowTestQuestions from "../pages/showTestQuestions.jsx";
import ShowQuestions from "../components/pages/ShowQuestions.jsx";
import AxamProssesses from "../pages/axam/AxamProssesses.jsx";
const MainRoot = () => {
  // const navigate = useNavigate();

  // const [loginData, setLoginData] = useState({ username: "", isStudent: null });

  return (
    <div>
        <MainLayout>
          <ToastContainer
            rtl={true}
            transition={Slide}
            position="top-center"
            icon={"🚀"}
          />
          <BrowserRouter>
            <Routes>
              <Route element={<App />} path="/">
                <Route
                  element={<img src={welcome} className="w-[40%] mx-auto" />}
                  path=""
                />
                <Route element={<Dashboard />} path="dashboard" />
                {/* {!loginData.isStudent ? ( */}
                <Route element={<ShowTestQuestions/>} path="TestQuestions" />
                {/* // ) : null} */}
                {/* {!loginData.isStudent ? ( */}
                <Route element={<AddMore />} path="addMore" />
                {/* ) : null} */}
                <Route element={<ShowQuestions/>} path="exam"/>
        
                <Route element={<p>5</p>} path="5" />
                <Route element={<p>6</p>} path="6" />
                <Route element={<p>7</p>} path="7" />
              </Route>
              <Route path="exam/:testId" element={<AxamProssesses/>} />      
              <Route element={<Login />} path="/login" />
              <Route element={<NotFound />} path="*" />
              {/* <Route path=":bookId" element={<Book />} /> */}
            </Routes>
          </BrowserRouter>
        </MainLayout>
    </div>
  );
};

export default MainRoot;
