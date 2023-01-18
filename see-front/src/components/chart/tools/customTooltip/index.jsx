import React from "react";

function CustomTooltip(active, payload, label) {
  if (active.active) {
    return (
      <div>
        <p>{active.payload[0].value+"kg"}</p>
        <p>{active.payload[1].value+"Kcal"}</p>

      </div>
    );
  }
  return null;
}
export default CustomTooltip;


