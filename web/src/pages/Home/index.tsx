import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";
import logo from "../../assets/logo.svg";

import { FiLogIn } from "react-icons/fi";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Your marketplace for waste collection</h1>
          <p>We help people find collection points efficiently</p>
          <Link to="/create-point">
            <span><FiLogIn /></span>
            <strong>Register a collection point</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
