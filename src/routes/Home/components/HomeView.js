import React from "react";
import "../../../styles/PageLayout.sass";
import AuthView from "./AuthView/AuthView";
import Footer from "../../../components/Footer";

export const HomeView = () => (
  <div className="homeContainer">
    <div className="container">
      <div className="form-container">
        <AuthView></AuthView>
      </div>
    </div>
  </div>
);

export default HomeView;
