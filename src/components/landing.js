import React from "react";
import "./landing.css";

import landinggroup from "../images/landinggroup.png";

export default function Landing() {
  return (
    <div>
      <div className="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row align-items-center  g-5 py-5">
          <div className=" col-lg-6">
            <h1 className="  Hlanding  lh-1 mb-3">
              Rent a <span className="purple">Place</span> away from{" "}
            </h1>
            <h1 className=" Hlanding  lh-1 mb-3">
              <span className="purple">Home</span> in the{" "}
              <span className="purple">Metaverse</span>
            </h1>

            <p className="lead">
              We provide you access to luxury and affordable houses<br></br> in
              the metaverse,get a chance to turn your <br></br>imagination to
              reality at your comfort zone
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            <form className="p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="d-flex form-control"
                  placeholder="search for location"
                ></input>
                <button type="submit" className="btn" id="purplebtn">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <div className="col-10 col-sm-8 col-lg-6"></div>
            <img
              src={landinggroup}
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
              alt="grp"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
