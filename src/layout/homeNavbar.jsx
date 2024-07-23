import { NavLink } from "react-router-dom";
import { faCartShopping, faChevronDown, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

const HomeNavbar = ({active}) => {

  HomeNavbar.propTypes = {
    active: PropTypes.string.isRequired,
  }

  return (
    <div>
        <div className="mainContainer text-white bg-black py-3">
            <div className="relative flex text-xs justify-center ">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="font-semibold border-b border-b-white ml-2">ShopNow</span></p>
            <div className="flex gap-3 items-center md:absolute end-0">
            <span>English</span>
            <FontAwesomeIcon icon={faChevronDown} />
            </div>
            </div>
        </div>
      <nav className="mainContainer bg-white border-gray-200 dark:bg-gray-900 drop-shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Exclusive
            </span>
          </NavLink>
          <div className="flex md:order-2 items-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <input
                type="text"
                id="search-navbar"
                className="block md:w-60 w-full p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 "
                placeholder="What are you looking for?"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div>
            <div className="relative flex gap-4 ps-4">
              <NavLink to="/wishlist"><FontAwesomeIcon icon={ faHeart } /></NavLink>
              <NavLink to="/cart"><FontAwesomeIcon icon={ faCartShopping } /></NavLink>
              <NavLink to="/account"><FontAwesomeIcon icon={ faUser } /></NavLink>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you looking for?"
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={`block text-black ${active == 'home' ? "activePage" : ""}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={`block text-black ${active == 'contact' ? "activePage" : ""}`}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={`block text-black ${active == 'about' ? "activePage" : ""}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={`block text-black ${active == 'signup' ? "activePage" : ""}`}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;
