import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeFromBag,
  
} from "../../src/cartSliice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Addtocart = () => {


  const [totalPrice, setTotalPrice] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartData = useSelector((state) => state.cart.items);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total += Number(cartData[i].totalPrice);
    }
    setTotalPrice(total);
  }, [cartData]);

  if (cartData.length === 0 && !orderSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <h2 className="text-base sm:text-xl font-semibold">
          Cart is Empty 🛒
        </h2>
      </div>
    );
  }

  const handleStripeCheckout = async () => {
  try {
    const res = await fetch("https://e-commerce-backened-4fih.onrender.com/create-checkout-session", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    cartItems: cartData,
    successUrl: window.location.origin + "/",
    cancelUrl: window.location.origin + "/paymentFailed",
  }),
});

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; 
    } else {
      console.error("No Stripe URL returned");
    }
  } catch (err) {
    console.error("Stripe checkout error:", err);
  }
};

  return (
    <>
      <div className="min-h-screen bg-gray-100 px-2 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow p-3 sm:p-6">

          <h2 className="text-base sm:text-2xl font-semibold mb-4 sm:mb-5">
            Your Order
          </h2>

          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 border-b pb-4 mb-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full sm:w-24 h-36 sm:h-24 object-cover rounded-lg"
              />
              <div className="flex-1 text-sm space-y-1">
                <p className="font-medium text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
                  {item.discription}
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  ₹ {item.totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromBag(index))}
                className="text-red-600 text-xs sm:text-sm self-end sm:self-center"
              >
                Remove
              </button>
              <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-center">
                <button
                  onClick={() => dispatch(increment(index))}
                  className="px-3 py-1 border rounded text-lg"
                >
                  +
                </button>

                <span className="text-sm sm:text-base">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(decrement(index))}
                  className="px-3 py-1 border rounded text-lg"
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center text-sm sm:text-lg font-semibold mt-5">
            <span>Total</span>
            <span>₹ {totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 sm:py-3 mt-5 rounded-lg sm:rounded-xl text-sm sm:text-base"
            onClick={handleStripeCheckout}
          >
            Confirm Order
          </button>
        </div>
      </div>

      {orderSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3">
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 w-full max-w-sm text-center animate-scaleIn">
            <div className="text-green-500 text-4xl sm:text-5xl mb-3">
              ✔
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Order Confirmed!
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm mb-4">
              Thank you for shopping with us.  
              Your order has been placed successfully.
            </p>

            <button
              onClick={() => {
                setOrderSuccess(false);
                navigate("/");
              }}
              className="w-full bg-green-600 text-white py-2 rounded-lg sm:rounded-xl text-sm sm:text-base"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Addtocart;
