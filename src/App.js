import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header.js";
import Main from "./component/main/Main.js";
import Footer from "./component/footer/Footer.js";
import Error from "./component/error/Error.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
