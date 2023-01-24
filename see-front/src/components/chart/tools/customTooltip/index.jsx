import React from "react";
/**
 * This function is used to display the data of the daily activity graph as a dot when hovering over it.
 * @param {*} active active sign that the mouse is currently flying over the graph
 * @returns 
 */
function CustomTooltip(active) {
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


