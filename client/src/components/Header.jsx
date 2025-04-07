import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, Heart, Info } from "lucide-react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Home</span>
            <span className="text-slate-700">Sphere</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" variant="ghost" className="p-2">
            <Search className="w-4 h-4 text-slate-600" />
          </Button>
        </form>
        <ul className="flex gap-2 sm:gap-4 items-center">
          <Link to="/">
            <Button
              variant="ghost"
              className="flex gap-1 items-center text-slate-700 hover:bg-slate-300"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>

          <Link to="/search">
            <Button
              variant="ghost"
              className="flex gap-1 items-center text-slate-700 hover:bg-slate-300"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </Link>

          <Link to="/favourites">
            <Button
              variant="ghost"
              className="flex gap-1 items-center text-slate-700 hover:bg-slate-300"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favourites</span>
            </Button>
          </Link>

          <Link to="/about">
            <Button
              variant="ghost"
              className="flex gap-1 items-center text-slate-700 hover:bg-slate-300"
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </Button>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover ml-2"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <Button variant="outline" className="text-slate-700 ml-2">
                Sign in
              </Button>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
