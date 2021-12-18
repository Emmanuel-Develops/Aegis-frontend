import React, { useContext, useState } from "react";
import GlobalContext from "../../../utils/GlobalContextProvider";

import { BsXLg } from "react-icons/bs";
import { products } from "../../../utils/DummyProductData";
import MarketGalleryCard from "../../../components/MarketGalleryCard";
import Profile from "../../../components/Profile";
import { Link, Navigate } from "react-router-dom";

const BuyerDashboard = () => {
  const ctx = useContext(GlobalContext);

  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setValue(() => "");
  };

  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="text-pry-clr text-lg font-semibold px-4 py-4 max-w-6xl mx-auto">
        Welcome,
        <span className="text-white bg-pry-clr px-6 py-1 ml-4">
          {ctx.userInfo.firstName}
        </span>
      </div>
      <section className="wrapper md:grid sm:grid-flow-col-dense md:items-center md:gap-x-0 max-w-6xl mx-auto mt-8 px-3 md:px-4">
        <div className="LHS-content w-full">
          <div className="Input-field">
            <h4 className="text-pry-clr font-semibold sm:font-bold">
              Vin Number
            </h4>
            <form
              onSubmit={handleVerify}
              className="inline-flex w-full gap-x-4 mt-3"
            >
              <div className="inline-flex sm:w-3/5 relative">
                <label
                  htmlFor="text"
                  onClick={() => setValue("")}
                  className="absolute right-3 bg-red-600 text-white top-1/2 transform -translate-y-1/2 rounded-full p-1 text-sm cursor-pointer"
                >
                  <BsXLg />
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={handleInput}
                  placeholder="4Y1SL65848Z411439"
                  className="bg-pry-accent py-1 sm:py-2 pl-4 rounded-xl w-full"
                />
              </div>
              <button className="bg-pry-clr text-white px-6 sm:px-12 rounded-xl">
                Verify
              </button>
            </form>
          </div>
          <div className="Gallery grid justify-center items-center my-6 sm:mt-16 gap-y-6 gap-x-8 sm:gap-y-10 sm:grid-cols-2 w-full">
            {products.slice(0, 4).map((product) => {
              return (
                <div className="" key={product.id}>
                  <MarketGalleryCard products={product} />
                </div>
              );
            })}
          </div>
          <div className="mb-8 sm:my-20 text-center">
            <Link
              to="/gallery"
              className="text-pry-clr font-semibold sm:font-bold bg-pry-accent px-4 py-2 rounded-xl hover:bg-pry-clr hover:text-white transition-colors"
            >
              View more in Gallery
            </Link>
          </div>
        </div>
        <aside className="RHS-content hidden xl:block w-80 md:w-56 h-5/6 mt-14 ml-auto">
          <Profile user={{ user: "buyer" }} />
        </aside>
      </section>
    </>
  );
};

export default BuyerDashboard;
