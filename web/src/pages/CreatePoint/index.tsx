import React from "react";
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import logo from "../../assets/logo.svg";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Back Home
        </Link>
      </header>

      <form>
        <h1>Register a colect point</h1>
        <fieldset>
          <legend>
            <h2>Data</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="name">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Address</h2>
            <span>Select the address on the map</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">State (UF) </label>
              <select name="uf" id="uf">
                <option value="0">Select a state</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option value="0">Select a City</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Colect Items</h2>
            <span>Select one or more items below</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lamp</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lamp</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lamp</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lamp</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lamp</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="teste"
              />
              <span>Lamp</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Register a colect point</button>
      </form>
    </div>
  );
};

export default CreatePoint;
