import { MdOutlineReceiptLong } from "react-icons/md";
import "../styles/receipt.css";

export default function Receipt() {
  return (
    <>
      <div className="order-details">
        <div>
          <span>Company</span>
          <label>Apple</label>
        </div>
        <div>
          <span>Order Number</span>
          <label>1266105</label>
        </div>
        <div>
          <span>Product</span>
          <label>MacBook Air</label>
        </div>
        <div>
          <span>VAT(20%)</span>
          <label>$100.00</label>
        </div>
      </div>

      <div className="seperator"></div>

      <div className="order-summary">
        <div>
          <label>You have to Pay</label>
          <div>
            <h5>549</h5>
            <span id="sub">.99</span>
            <span>USD</span>
          </div>
        </div>
        <MdOutlineReceiptLong />
      </div>
    </>
  );
}
