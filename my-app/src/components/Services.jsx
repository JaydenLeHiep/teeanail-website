import React, { useEffect } from "react";
import "../styles/Services.css";

const Services = ({ setCurrentView }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Auto-scroll to top
  }, []);

  return (
    <div className="services-container">
      <h1 className="services-title">Dienstleistungen & Preisliste</h1>

      <div className="services-grid">
        {/* NEUMODELLAGE */}
        <div className="service-category">
          <h2>Neumodellage</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th></th>
                <th>Acryl</th>
                <th>Gel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natur Durchsichtig</td>
                <td>50€</td>
                <td>53€</td>
              </tr>
              <tr>
                <td>Natur Make-Up</td>
                <td>55€</td>
                <td>58€</td>
              </tr>
              <tr>
                <td>Farbe</td>
                <td>57€</td>
                <td>60€</td>
              </tr>
              <tr>
                <td>French / Ombre / Glitzer</td>
                <td>64€</td>
                <td>66€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AUFFÜLLEN */}
        <div className="service-category">
          <h2>Auffüllen</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th></th>
                <th>Acryl</th>
                <th>Gel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natur Durchsichtig</td>
                <td>40€</td>
                <td>43€</td>
              </tr>
              <tr>
                <td>Natur Make-up</td>
                <td>45€</td>
                <td>48€</td>
              </tr>
              <tr>
                <td>Farbe</td>
                <td>48€</td>
                <td>51€</td>
              </tr>
              <tr>
                <td>French / Ombre / Glitzer</td>
                <td>57€</td>
                <td>59€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NATURNAGELVERSTÄRKUNG */}
        <div className="service-category">
          <h2>Naturnagelverstärkung</h2>
          <ul>
            <li><span>Natur Durchsichtig</span><span>45€</span></li>
            <li><span>Natur Make-up / Farbe</span><span>48€</span></li>
            <li><span>French / Ombre / Glitzer</span><span>58€</span></li>
          </ul>
        </div>

        {/* MANIKÜRE */}
        <div className="service-category">
          <h2>Maniküre</h2>
          <ul>
            <li><span>Maniküre ohne Farbe</span><span>28€</span></li>
            <li><span>Maniküre mit Shellac</span><span>45€</span></li>
            <li><span>Maniküre mit Shellac French</span><span>50€</span></li>
          </ul>
        </div>

        {/* EXTRA */}
        <div className="service-category">
          <h2>Extra</h2>
          <ul>
            <li><span>Sticker / Strassstein</span><span>ab 1€</span></li>
            <li><span>Matte Effekt</span><span>5€</span></li>
            <li><span>Chrome / Cateye</span><span>10€</span></li>
            <li><span>Glitzer</span><span>ab 2€</span></li>
            <li><span>3D Design</span><span>ab 5€</span></li>
            <li><span>Handdesign pro Nagel</span><span>ab 2€</span></li>
            <li><span>Extra lange Nägel ab 1cm</span><span>ab 5€</span></li>
            <li><span>Formänderung</span><span>5€</span></li>
          </ul>
        </div>

        {/* PEDIKÜRE */}
        <div className="service-category">
          <h2>Pediküre</h2>
          <ul>
            <li><span>Pediküre ohne Farbe</span><span>38€</span></li>
            <li><span>Pediküre mit Shellac</span><span>55€</span></li>
            <li><span>Pediküre mit Shellac French</span><span>60€</span></li>
            <li><span>Zehnagelmodellage (ohne Pediküre) Farbe</span><span>55€</span></li>
            <li><span>Zehnagelmodellage (ohne Pediküre) French</span><span>60€</span></li>
          </ul>
        </div>

        {/* ENTFERNEN */}
        <div className="service-category">
          <h2>Entfernen</h2>
          <ul>
            <li><span>Nagelmodellage Acryl / Gel entfernen</span><span>20€</span></li>
            <li><span>Shellac entfernen</span><span>10€</span></li>
          </ul>
        </div>

        {/* FINGERNÄGEL / FUßNÄGEL LACKIEREN */}
        <div className="service-category">
          <h2>Fingernägel / Fußnägel lackieren</h2>
          <ul>
            <li><span>Mit Shellac</span><span>32€</span></li>
            <li><span>Mit Shellac French</span><span>37€</span></li>
          </ul>
        </div>

        {/* WIMPERNVERLÄNGERUNG */}
        <div className="service-category wimpern">
          <h2>Wimpernverlängerung</h2>
          <div className="wimpern-columns">
            <div className="wimpern-column">
              <ul>
                <li><span>Neuanlage 1:1 Technik</span><span>85€</span></li>
                <li><span>Auffüllen bis 2 Wochen</span><span>55€</span></li>
                <li><span>Auffüllen bis 3 Wochen</span><span>65€</span></li>
              </ul>

              <ul className="wimpern-group">
                <li><span>Neuanlage Natur-Hybrid Look</span><span>95€</span></li>
                <li><span>Auffüllen bis 2 Wochen</span><span>65€</span></li>
                <li><span>Auffüllen bis 3 Wochen</span><span>70€</span></li>
              </ul>

              <ul className="wimpern-group">
                <li><span>Neuanlage 3D-5D Volume</span><span>105€</span></li>
                <li><span>Auffüllen bis 2 Wochen</span><span>70€</span></li>
                <li><span>Auffüllen bis 3 Wochen</span><span>75€</span></li>
              </ul>
            </div>

            <div className="wimpern-column">
              <ul>
                <li><span>Neuanlage 6D-8D Volume</span><span>115€</span></li>
                <li><span>Auffüllen bis 2 Wochen</span><span>80€</span></li>
                <li><span>Auffüllen bis 3 Wochen</span><span>90€</span></li>
              </ul>

              <ul className="wimpern-group">
                <li><span>Neuanlage Kim Kardashian Look</span><span>135€</span></li>
                <li><span>Auffüllen bis 2 Wochen</span><span>95€</span></li>
                <li><span>Auffüllen bis 3 Wochen</span><span>105€</span></li>
              </ul>

              <ul className="wimpern-group">
                <li><span>Entfernen der lashes</span><span>25€</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;