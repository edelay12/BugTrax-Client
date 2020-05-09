import React, { useState } from "react";

export default function BurgerIcon({ menu, isOpen }) {
  return (
    <div className="burger-icon-hidden" onClick={() => isOpen(!menu)}>
      <div className={!menu ? "burger line1" : "burger line1-close"}></div>
      <div className={!menu ? "burger line2" : "burger line2-close"}></div>
      <div className={!menu ? "burger line3" : "burger line3-close"}></div>
    </div>
  );
}
