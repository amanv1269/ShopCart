import React from "react";

const CheckoutSteps = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* Delivery Address Form */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            ></textarea>
          </div>
          {/* Add more fields for city, state, zip code, etc. */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Address
          </button>
        </form>
      </div>

      {/* Payment Option */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Payment Option</h2>
        {/* Add your payment option form or integration here */}
        <p className="text-gray-600">
          Example: Add payment gateway integration or other payment options
        </p>
      </div>
    </div>
  );
};

export default CheckoutSteps;
