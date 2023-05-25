import Chip from "../assets/chip.jpeg";
import { MdOutlineWifi } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import MasterCardLogo from "../assets/mastercard_2019_logo.svg";

export default function Form() {
  return (
    <div className="card">
      <div className="top-card">
        <img src={Chip} alt="" />
        <MdOutlineWifi />
      </div>

      <div className="card-details">
        <h5>Jonathan Michael</h5>
        <div className="card-number">
          <RxDotFilled />
          <RxDotFilled />
          <RxDotFilled />
          <RxDotFilled />

          <span>3456</span>
        </div>
        <div>
          <h4>09/22</h4>
          <img src={MasterCardLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
