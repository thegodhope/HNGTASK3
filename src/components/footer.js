import React from "react";
import footervector from "../images/footervector.png";
import footervec from "../images/footervec.png";
import igvec from "../images/igvec2.png";
import facebook from "../images/facebook.png";
import twittervec from "../images/twittervec.png";
import "./footer.css";
export default function footer() {
  return (
    <div>
      <div className="container bg-dark text-light">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5  ms-5 my-5 border-top text-light">
          <div className="col mb-3">
            <img className="" width="40" height="32" src={footervector}></img>
            <span className="fs-4">
              <img src={footervec}></img>
            </span>
            <div className=" d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
              <ul className=" mt-4 list-unstyled d-flex">
                <li class="ms-2">
                  <a className="link-dark" href="#">
                    <img src={facebook}></img>
                  </a>
                </li>
                <li className="ms-5">
                  <a className="link-dark" href="#">
                    <img clasName="ig" src={igvec}></img>
                  </a>
                </li>
                <li class="ms-5">
                  <a className="link-dark" href="#">
                    <img src={twittervec}></img>
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-light">&copy; 2022 Metabnb</p>
          </div>

          <div className="col mb-3">
            <h5>Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0  text-light">
                  NFT
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Token
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Landlords
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Places</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" class="nav-link p-0 text-light">
                  Castle
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Farms
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Beach
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Learn more
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>About us</h5>
            <ul className="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Road Map
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Creators
                </a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Career
                </a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-light">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

{
  /* <img className="" width="40" height="32" src={footervector}></img>
              <span class="fs-4">
                <img src={footervec}></img>
              </span>
              <p>*/
}
