import React from "react";
import dvector1 from "../images/mbtoken.png";
import dvector2 from "../images/metamask.png";
import dvector3 from "../images/opensea.png";
import "./divider.css";
export default function Divider() {
  return (
    <div>
      <div className="d-flex justify-content-center py-3">
        <div className="container-fluid" id="tokenicon">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
            <div className="py-1 col">
              <img src={dvector1} alt="Profile" />
            </div>
            <div className="py-1 col">
              <img src={dvector2} className="rounded-img" alt="Profile" />
            </div>
            <div className="py-1 col">
              <img src={dvector3} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
