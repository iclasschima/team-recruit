import { FaPen } from "react-icons/fa";
import MasterCardLogo from "../assets/mastercard_2019_logo.svg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IoIosKeypad } from "react-icons/io";
import "../styles/form.css"

export default function Form() {
  return (
    <div className="form">
      <div className="form-group ">
        <div className="form-text card">
          <div>
            <label>Card Number</label>
            <span className="sub-text">
              Enter the 16-digit card number on the card
            </span>
          </div>
          <div>
            <FaPen />
            <span>Edit</span>
          </div>
        </div>
        <div className="input-wrapper">
          <img src={MasterCardLogo} alt="mastercard-logo" />
          <input
            className="card-input"
            value="2412 -  7512 - 3412  - 3456"
            disabled
          />
          <BsFillPatchCheckFill />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-text">
          <label>CVV Number</label>
          <span className="sub-text">
            Enter the 3 or 4 digit number on card
          </span>
        </div>
        <div>
          <input className="text-center" value="327" disabled />
          <IoIosKeypad />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-text">
          <label>Expiry Date</label>
          <span className="sub-text">Enter expiry date of the card</span>
        </div>
        <div className="date-grid">
          <input className="text-center" value="09" disabled /> /{" "}
          <input className="text-center" value="22" disabled />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-text">
          <label>Password</label>
          <span className="sub-text">Enter your dynamic password</span>
        </div>
        <div>
          <input value="***********" type="password" disabled />
          <IoIosKeypad />
        </div>
      </div>

      <button>Pay Now</button>
    </div>
  );
}
