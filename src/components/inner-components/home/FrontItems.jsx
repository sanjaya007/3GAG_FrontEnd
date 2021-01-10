import React from "react";

function FrontItems(props) {
  return (
    <>
      <div className="item">
        <div className="image-container">
          <img
            src={props.img}
            alt="gadgets"
            className="img-responsive img-fluid"
          />
        </div>
        <div className="img-name py-3">
          <span> {props.name}</span>
        </div>
      </div>
    </>
  );
}

export default FrontItems;
