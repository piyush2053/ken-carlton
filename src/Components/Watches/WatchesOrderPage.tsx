import React, { useState } from "react";
import BANNER from "../../Assets/Banner/banner.png";

export function WatchesOrderPage() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    const input = e.target.value;
    if (input.length <= 20) {
      setName(input);
    }
  };

  const isTooLong = name.length > 8;

  return (
    <div>
      {/* Background Section */}
      <section
        className="min-h-[600px] bg-cover bg-center flex items-center justify-center text-center relative bg-black"
        style={{ backgroundImage: `url(${BANNER})` }}
      >
        <div className="bg-black bg-opacity-20 w-full h-full absolute top-0 left-0" />

        {/* Main Content */}
        <div className="relative z-10 text-white w-full flex flex-col items-center px-4">
          {name && !isTooLong && (
            <div className="absolute bottom-[40%] left-1/2 transform -translate-x-1/2 text-gray-50 text-[6px] font-thin tracking-widest mb-[20px] opacity-70 px-2 py-1 rounded">
              {name}
            </div>
          )}

          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent mt-[460px] backdrop-blur-sm border border-[#424242] px-4 py-2 text-white text-sm placeholder-white mb-2 outline-none rounded-full"
            value={name}
            onChange={handleChange}
            maxLength={20}
          />

          {isTooLong && (
            <p className="text-orange-400 text-xs mb-2">
              You can’t enter more than 8 characters.
            </p>
          )}

          <button
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={isTooLong || name.length === 0}
            onClick={() => setShowModal(true)}
          >
            Confirm and Place Order
          </button>

          <p className="mt-2 text-xs text-white">
            Customization and personalization are completely free of charge.
          </p>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-black">Out of Stock</h2>
            <p className="text-gray-700 mb-6">
              Sorry, currently our team is expediting watch production. Our watches are out of stock for now.
            </p>
            <button
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="bg-black pb-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ken Carlton. All rights reserved.
      </footer>
    </div>
  );
}
