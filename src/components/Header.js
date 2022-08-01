import React from "react";

function Header() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="alert alert-light card text-center"
        style={{
          width: 28 + "vw",
          marginTop: 3 + "vh",
          color: "blue",
        }}
      >
      
        <h2>
          <span style={{ fontweight: "bold", color: "#FA731F" }}>Expense</span>
          <span style={{ fontweight: "bold", color: "#FA731F" }}>Tracker</span>
        </h2>
        <img
          src={process.env.PUBLIC_URL + "/images/c.png"}
          style={{
            height: 20 + "vh",
            borderRadius: "50%",
            marginTop: -7 + "vh",
            marginBottom: -7 + "vh",
          }}
        />
      </div>
    </div>
  );
}
export default Header;
