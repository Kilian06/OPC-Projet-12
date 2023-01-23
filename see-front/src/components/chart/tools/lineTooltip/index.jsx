import React from "react";

function LineCustomTooltip(active, payload, label) {
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
