import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../redux/favouriteSlice";
import { useState, useEffect } from "react";



const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function ListingItem({ listing }) {
  const dispatch = useDispatch();
const favourites = useSelector((state) => state.favourites);

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const exists = favourites.some((item) => item._id === listing._id);
    setIsFavourite(exists);
  }, [favourites, listing._id]);

  const toggleFavourite = (e) => {
    e.preventDefault(); // prevent Link navigation
    if (isFavourite) {
      dispatch(removeFromFavourites(listing._id));
    } else {
      dispatch(addToFavourites(listing));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] relative">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        {/* Heart Button */}
        <button
          onClick={toggleFavourite}
          className="absolute top-2 right-2 text-red-500 text-xl z-10"
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </button>

        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold ">
            {listing.offer
              ? formatPrice(listing.discountPrice)
              : formatPrice(listing.regularPrice)}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    offer: PropTypes.bool.isRequired,
    discountPrice: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
  }).isRequired,
};
