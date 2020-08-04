import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import logo from "../../assets/logo.svg";

import { Map, TileLayer, Marker } from "react-leaflet";

import api from '../../services/api'

interface Item {
  id: number,
  title: string,
  image_url: string
}

const CreatePoint = () => {

  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    })
  }, [])


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

          <Map center={[41.1601201, -8.1972603]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.1601201, -8.1972603]} />
          </Map>

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
            {items.map(item => (
              <li key={item.id}>
              <img
                src={item.image_url}
                alt="teste"
              />
              <span>{item.title}</span>
            </li>
            ))}
          </ul>
        </fieldset>
        <button type="submit">Register a colect point</button>
      </form>
    </div>
  );
};

export default CreatePoint;
