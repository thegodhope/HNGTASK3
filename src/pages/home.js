import React from "react";
import Landing from "../components/landing";
import Divider from "../components/divider";
import Connect from "../components/connect";
import Nfts from "../components/nfts";

export default function home() {
  return (
    <div>
      <Landing />
      <Divider />
      <Connect />
      <Nfts />
    </div>
  );
}
