import { HiOutlineCreditCard } from "react-icons/hi";

export default function TopSection() {
  return (
    <div className="logo-top-section">
      <div className="logo">
        <div className="logo-icon">
          <HiOutlineCreditCard />
        </div>
        <span className="logo-text">
          <b>AceCoin</b>Pay
        </span>
      </div>

      <div className="timer">
        <span>0</span>
        <span>1</span>
        <b>:</b>
        <span>1</span>
        <span>9</span>
      </div>
    </div>
  );
}
