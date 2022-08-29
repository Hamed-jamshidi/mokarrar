import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const NotFound = () => {
  return (
    <div className="notfound">
      <div>
        <h1 style={{ fontSize: "40px", paddingTop: "50px" }}>
          this page is not found : 404
        </h1>
      </div>
      <div>
        <Link to="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default NotFound;
