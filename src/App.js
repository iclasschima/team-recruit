import "./App.css";
import { IoClose } from "react-icons/io5";
import TopSection from "./components/TopSection";
import Form from "./components/Form";
import Card from "./components/Card";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="close-icon-wrapper">
          <IoClose size={25} />
        </div>

        <div className="grid-container">
          <div className="left-section">
            <TopSection />
            <Form />
          </div>
          <div className="right-section">
            <div className="receipt-wrapper">
              <Card />
              <Receipt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
