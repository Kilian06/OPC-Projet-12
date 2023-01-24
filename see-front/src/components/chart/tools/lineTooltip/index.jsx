import React from "react";
/**
 * this function is used to display the duration of the session when hovering over the mouse on the graph: average session duration
 * @param {*} active active sign that the mouse is currently flying over the graph
 * @returns 
 */
function LineCustomTooltip(active) {
  if (active.active) {

    return (
      <div>
        <p>{active.payload[0].value+" min"}</p>
      </div>
    );
  }
  return null;
}
export default LineCustomTooltip;
