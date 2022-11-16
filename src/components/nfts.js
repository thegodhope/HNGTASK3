import React from "react";
import "./nfts.css";
import nftimg from "../images/nftgroup.png";

export default function Nfts() {
  return (
    <div>
      <div id="jb" className="container mt-4 p-5  text-white rounded">
        <div className="row align-items-md-stretch">
          <div className="col-md-4 ">
            <div className="mt-5">
              <p className=" fs-2 fw-bold text-light">Metabnb NFTs</p>
              <p className="mt-3">
                Discocer our NFT gift cards collection. Loyal
              </p>
              <p className="">customers get amazing gift cards which are</p>
              <p className="">customers get amazing gift cards which are</p>
              <p className="">traded as NFTs. These NFTs give our customer</p>
              <p className="">access to loads of our exclusive services</p>

              <button
                class="d-flex mt-5 btn btn-outline-light bg-light"
                type="button"
              >
                <span className="purple">Learn More</span>
              </button>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="">
              <img src={nftimg} width="100%"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
