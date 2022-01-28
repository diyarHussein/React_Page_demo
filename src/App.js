import HeaderElement from "./component/HeaderElements/HeaderElement";
import Vertical from "./component/VerticalCard/Vertical";
import Horizontal from "./component/HorziontalCard/Horizontal";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HeaderElement />} />
        </Routes>
      </BrowserRouter>
      <Vertical />
      <Horizontal />
      <Footer />
    </div>
  );
}

export default App;
