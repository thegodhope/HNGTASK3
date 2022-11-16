import React from "react";
import headervector from "../images/headervector.png";
import metavector from "../images/metavector.png";
import wolfhead from "../images/wolfhead.png";
import wlike from "../images/wlike.png";
import { Link } from "react-router-dom";
import "./nav.css";

export default function () {
  return (
    <div className="container">
      <div class="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <Link
            to="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img
              src={headervector}
              className="bi me-2"
              width="40"
              height="32"
              role="img"
            ></img>
            <span>
              <img src={metavector} width="100%"></img>
            </span>
          </Link>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-dark fw-bold">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="Place to Stay"
                className="nav-link px-2 link-dark fw-bold"
              >
                Place to Stay
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-dark fw-bold">
                NFTs
              </Link>
            </li>

            <li>
              <Link href="#" className="nav-link px-2 link-dark fw-bold">
                Community
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Connect Wallet
            </button>
            <div class="modal" id="myModal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  {/*Modal Header*/}
                  <div class="modal-header">
                    <h4 class="modal-title">Connect Wallet</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* Modal body*/}
                  <div class="modal-body">
                    <p>Choose your preffered wallet:</p>
                  </div>
                  <div class="modal-body">
                    <div className="card p-2">
                      <button className="btn btn-light btn-outline-secondary">
                        <img
                          src={wolfhead}
                          className="bi"
                          width="30"
                          height="30"
                          role="img"
                        ></img>
                        <span className="">Metamask</span>
                      </button>

                      <button className="mt-1 btn btn-light btn-outline-secondary">
                        <img
                          src={wlike}
                          className="bi"
                          width="30"
                          height="30"
                          role="img"
                        ></img>
                        <span className="">Wallet </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/*Modal footer */}
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

{
  /*d-grid gap-2 col-6 mx-auto*/
}
