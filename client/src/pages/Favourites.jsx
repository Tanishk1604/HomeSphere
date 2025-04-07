import React from "react";
import { useSelector } from "react-redux";
import ListingItem from "../components/ListingItem";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className="flex-1">
      <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
        Your Favourites:
      </h1>
      <div className="p-7 flex flex-wrap gap-4">
        {favourites.length === 0 ? (
          <p className="text-xl text-slate-700">No favourite listings yet!</p>
        ) : (
          favourites.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
