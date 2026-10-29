
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOrderPopup(false)}
          />

          {/* Popup container */}
          <div
            className="relative z-10 w-[90%] max-w-[300px] rounded-md bg-white p-4 shadow-md duration-200 dark:bg-gray-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                Order Now
              </h1>

              <IoCloseOutline
                className="cursor-pointer text-2xl text-gray-600 dark:text-white"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Form section */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="mb-4 w-full rounded-full border border-gray-300 px-3 py-2 outline-none dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />

              <input
                type="email"
                placeholder="Email"
                className="mb-4 w-full rounded-full border border-gray-300 px-3 py-2 outline-none dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />

              <input
                type="text"
                placeholder="Address"
                className="mb-4 w-full rounded-full border border-gray-300 px-3 py-2 outline-none dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />

              <div className="flex justify-center">
                <button
                  onClick={() => setOrderPopup(false)}
                  className="rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-2 text-white duration-200 hover:scale-105"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
