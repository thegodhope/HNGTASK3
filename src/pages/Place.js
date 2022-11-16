import React from "react";
import { data } from "../components/data";
import "../components/connect.css";
import icon from "../images/iconmenu.png";

import stars from "../images/Star2.png";
export default function Place() {
  return (
    <>
      <div className="container">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <ul className="align-items-center nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li className="nav-link px-4 link-dark">Restaurant</li>
              <li className="nav-link px-4 link-dark">Cottage</li>
              <li className="nav-link px-4 link-dark">Castle</li>
              <li className="nav-link px-4 link-dark">Fantastastic City</li>
              <li className="nav-link px-4 link-dark">Beach</li>
              <li className="nav-link px-4 link-dark">Carbins</li>
              <li className="nav-link px-4 link-dark">Off-grid</li>
              <li className="nav-link px-4 link-dark">Farm</li>
            </ul>

            <div className="col-md-3 px-4 text-end">
              <button className="col location-button">
                <span>Location</span>
                <img src={icon} alt="Profile" />
              </button>
            </div>
          </header>
        </div>
      </div>

      <div className="album py-5 bg-light">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="container">
            <div className="row rows-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
              {data.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <div class="card shadow-sm">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src={item.image}
                        width="260px"
                        height="265px"
                        alt="img"
                      ></img>

                      <div className="card-body">
                        <div className="cardb d-flex justify-content-between align-items-center">
                          <div className="pop">
                            <h6 className="card-text">Desert King</h6>
                            <small className=" card-text" id="cs">
                              2345km away
                            </small>
                            <br></br>
                            <img className="me-1" src={stars} alt="img"></img>
                            <img className="me-1" src={stars} alt="img"></img>
                            <img className="me-1" src={stars} alt="img"></img>
                            <img className="me-1" src={stars} alt="img"></img>
                            <img className="me-1" src={stars} alt="img"></img>
                          </div>
                          <div className="pup">
                            <h6 className="card-text ">1MBT per night</h6>
                            <small className="card-text">
                              available for 2weeks stay
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
