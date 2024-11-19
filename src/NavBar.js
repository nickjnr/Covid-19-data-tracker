import React from "react";

function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "rgb(245, 238, 194)" }}
      >
        <div
          className="container-fluid"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <h4 style={{ color: "#416a59" }}>COVID-19 TRACKER</h4>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
