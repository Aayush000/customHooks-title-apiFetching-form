import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Homepage from "./pages/Homepage";
import "./App.css";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <br />
        <br />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route index element={<Homepage />} />
          {/* Above two are same */}
          <Route path="contact" element={<Contactus />} />
          <Route path="about" element={<Aboutus />} />
          {/* For pages that are not made */}
          <Route path="*" element={<PageNotFound />} />

          <Route path="books">
            <Route index element={<b>Books are here</b>} />
            {/* Dynamic books/anything books/1 books/5  and we can write anything in place of id as it is just a placeholder; however colon (:) is important */}
            <Route path=":id/:author" element={<BookDetails />} />
            <Route
              path="buy"
              element={
                <b>Books are here, and you can buy any books that you like.</b>
              }
            />
            <Route
              path="sell"
              element={
                <b>
                  Books are here, and you can sell any book that you don't want.
                </b>
              }
            />
          </Route>
          {/* The below way is an option as well */}
          {/* <Route
            path="books/buy"
            element={
              <b>Books are here, and you can buy any books that you like.</b>
            }
          /> */}
        </Routes>
        <br />
        <br />
        <div className="footer">
          Copyright &copy; {new Date().getFullYear()}
        </div>
      </Router>
    </div>
  );
};

export default App;
