import React from "react";
import { Header } from "../../components";
import "./FilmsStyle.scss"

export function Films() {
  return (
    <>
    <Header />
    <div className="films-container">
      <h2 style={{ color: "white" }}>Films page</h2>;
    </div>
    </>
  );
}
