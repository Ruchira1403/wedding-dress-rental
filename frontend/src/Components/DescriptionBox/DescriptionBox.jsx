import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          molestiae laboriosam omnis expedita dolor, assumenda ipsam recusandae
          provident sint exercitationem saepe nemo voluptatem architecto esse
          accusamus illum magnam ratione nam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quod
          ex repellendus distinctio, commodi eos obcaecati molestiae assumenda
          reprehenderit beatae possimus quisquam incidunt explicabo ea mollitia
          eum vero. Reiciendis, doloribus.
        </p>
      </div>
    </div>
  );
};
