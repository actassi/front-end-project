import React, { useState } from 'react'
import './fixture.css';


function Fixture() {
  return (
    <div className="App">
      <section id="presentation">
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo A</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/qa.svg" alt="Qatar" />
              </div>
              <div className="country-name">
                Qatar
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/ec.svg" alt="Ecuador" />
              </div>
              <div className="country-name">
                Ecuador
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/sn.svg" alt="Senegal" />
              </div>
              <div className="country-name">
                Senegal
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/nl.svg" alt="Paises Bajos" />
              </div>
              <div className="country-name">
                Países Bajos
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo B</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/gb-eng.svg" alt="Inglaterra" />
              </div>
              <div className="country-name">
                Inglaterra
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/ir.svg" alt="Irán" />
              </div>
              <div className="country-name">
                Irán
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/us.svg" alt="Estados Unidos" />
              </div>
              <div className="country-name">
                Estados Unidos
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/gb-wls.svg" alt="Gales" />
              </div>
              <div className="country-name">
                Gales
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo C</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/ar.svg" alt="Argentina" />
              </div>
              <div className="country-name">
                Argentina
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/sa.svg" alt="Arabia Saudita" />
              </div>
              <div className="country-name">
                Arabia Saudita
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/mx.svg" alt="Mexico" />
              </div>
              <div className="country-name">
                México
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/pl.svg" alt="Polonia" />
              </div>
              <div className="country-name">
                Polonia
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo D</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/fr.svg" alt="Francia" />
              </div>
              <div className="country-name">
                Francia
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/au.svg" alt="Australia" />
              </div>
              <div className="country-name">
                Australia
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/dk.svg" alt="Dinamarca" />
              </div>
              <div className="country-name">
                Dinamarca
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/tn.svg" alt="Túnez" />
              </div>
              <div className="country-name">
                Túnez
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo E</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/es.svg" alt="España" />
              </div>
              <div className="country-name">
                España
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/cr.svg" alt="Costa Rica" />
              </div>
              <div className="country-name">
                Costa Rica
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/de.svg" alt="Germany" />
              </div>
              <div className="country-name">
                Alemania
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/jp.svg" alt="Japón" />
              </div>
              <div className="country-name">
                Japón
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo F</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/be.svg" alt="Belgica" />
              </div>
              <div className="country-name">
                Bélgica
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/ca.svg" alt="Canadá" />
              </div>
              <div className="country-name">
                Canadá
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/ma.svg" alt="Marruecos" />
              </div>
              <div className="country-name">
                Marruecos
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/hr.svg" alt="Croatia" />
              </div>
              <div className="country-name">
                Croacia
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo G</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/br.svg" alt="Brasil" />
              </div>
              <div className="country-name">
                Brasil
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/rs.svg" alt="Serbia" />
              </div>
              <div className="country-name">
                Serbia
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/ch.svg" alt="Suiza" />
              </div>
              <div className="country-name">
                Suiza
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/cm.svg" alt="Camerún" />
              </div>
              <div className="country-name">
                Camerún
              </div>
            </li>
          </ul>
        </div>
        <div className="presentation-group">
          <ul><h2 className="presentation-group-letter">Grupo H</h2>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/pt.svg" alt="Portugal" />
              </div>
              <div className="country-name">
                Portugal
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/gh.svg" alt="Ghana" />
              </div>
              <div className="country-name">
                Ghana
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/uy.svg" alt="Uruguay" />
              </div>
              <div className="country-name">
                Uruguay
              </div>
            </li>
            <li className="country">
              <div className="country-flag-container">
                <img className="country-flag" src="https://flagcdn.com/kr.svg" alt="Corea del Sur" />
              </div>
              <div className="country-name">
                Corea del Sur
              </div>
            </li>
          </ul>
        </div>
      </section>
      <hr className="sectionsdivision" />
      <section id="matches-section">
        <h2 id="matches-header">Partidos</h2>
        <div className="group">
          <h3 className="group-matches">Grupo A</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Senegal</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Países Bajos</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">Qatar</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Ecuador</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Qatar</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Senegal</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Países Bajos</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Ecuador</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Países Bajos</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Qatar</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Ecuador</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Senegal</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="A">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Qatar</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Ecuador</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">Senegal</td>
                <td className="pts" id="pts-senegal">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Países Bajos</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo B</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Inglaterra</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Irán</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">EE UU</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Gales</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Gales</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Irán</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Inglaterra</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">EE UU</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Gales</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Inglaterra</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Irán</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">EE UU</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="B">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Inglaterra</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Irán</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">EEUU</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Gales</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo C</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Argentina</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">A. Saudita</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">México</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Polonia</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">A. Saudita</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Polonia</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Argentina</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">México</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Argentina</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Polonia</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">A. Saudita</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">México</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="C">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Argentina</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">A. Saudita</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">México</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Polonia</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo D</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Dinamarca</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Túnez</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">Francia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Australia</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Australia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Túnez</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Francia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Dinamarca</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Australia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Dinamarca</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Francia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Túnez</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="D">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Francia</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Australia</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">Dinamarca</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Túnez</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo E</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Alemania</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Japón</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">España</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Costa Rica</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Costa Rica</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Japón</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">España</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Alemania</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">España</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Japón</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Costa Rica</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Alemania</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="E">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">España</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Costa Rica</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">Alemania</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Japón</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo F</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Marruecos</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Croacia</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">Bélgica</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Canadá</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Bélgica</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Marruecos</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Canadá</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Croacia</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Bélgica</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Croacia</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Canadá</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Marruecos</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="F">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Bélgica</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Canadá</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">Marruecos</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Croacia</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo G</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Suiza</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Camerún</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">Brasil</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Serbia</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Serbia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Camerún</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Brasil</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Suiza</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Brasil</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Camerún</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Serbia</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Suiza</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="G">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Brasil</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Serbia</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">Suiza</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Camerún</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="group">
          <h3 className="group-matches">Grupo H</h3>
          <div className="date">
            <h4>Fecha 1</h4>
            <form className="match1" onSubmit="handleSubmit(event)">
              <label className="team-1">Uruguay</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Corea del Sur</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match2" onSubmit="handleSubmit(event)">
              <label className="team-1">Portugal</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Ghana</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 2</h4>
            <form className="match3" onSubmit="handleSubmit(event)">
              <label className="team-1">Ghana</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Corea del Sur</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match4" onSubmit="handleSubmit(event)">
              <label className="team-1">Portugal</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Uruguay</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="date">
            <h4>Fecha 3</h4>
            <form className="match5" onSubmit="handleSubmit(event)">
              <label className="team-1">Portugal</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Corea del Sur</label>
              <button type="submit" className="hidden" />
            </form>
            <form className="match6" onSubmit="handleSubmit(event)">
              <label className="team-1">Ghana</label>
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="groupsMatches" size={2} min={0} max={99} placeholder="--" />
              <label className="team-2">Uruguay</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <table id="H">
            <thead>
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Pts</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="team-name">Portugal</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="team-name">Ghana</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="team-name">Uruguay</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="team-name">Corea del Sur</td>
                <td className="pts">0</td>
                <td className="pj">0</td>
                <td className="pg">0</td>
                <td className="pe">0</td>
                <td className="pp">0</td>
                <td className="gf">0</td>
                <td className="gc">0</td>
                <td className="dif">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="crear" onSubmit="brackets(event)">
          <input className="crear-button" type="submit" defaultValue="Crear Brackets" />
        </form>
        <form className="control-button" onSubmit="quickFill(event)">
          <input className="quickFill" type="submit" defaultValue="Random-inador" />
        </form>
      </section>
      <section id="PlayOffs" className="hidden">
        <div id="champion" className="champion" />
        <div id="bracket">
          <div className="eighths">
            <form id="eighths1" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <label className="eighthsTeams">1A</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset>
                <label className="eighthsTeams">2B</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="eighths2" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <label className="eighthsTeams">1C</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset>
                <label className="eighthsTeams">2D</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="eighths3" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <label className="eighthsTeams">1E</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset>
                <label className="eighthsTeams">2F</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="eighths4" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <label className="eighthsTeams">1G</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset>
                <label className="eighthsTeams">2H</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="quarters">
            <form id="quarter1" className="quarterMatches" onSubmit="quartersSubmit(event)">
              <fieldset id="eighthwinner1">
                <label>Sin Definir</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset id="eighthwinner2">
                <label>Sin Definir</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="quarter2" className="quarterMatches" onSubmit="quartersSubmit(event)">
              <fieldset id="eighthwinner3">
                <label>Sin Definir</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset id="eighthwinner4">
                <label>Sin Definir</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="semis">
            <form id="semifin1" className="semisMatches" onSubmit="semisSubmit(event)">
              <fieldset id="quarterwinner1">
                <label>Sin Definir</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <fieldset id="quarterwinner2">
                <label>Sin Definir</label>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div id="final" className="final">
            <form className="finalMa1" onSubmit="finalSubmit(event)">
              <label id="finalist1">Sin Definir</label>
              <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
              <label id="finalist2">Sin Definir</label>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="semis">
            <form id="semifin2" className="semisMatches" onSubmit="semisSubmit(event)">
              <fieldset id="quarterwinner3">
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label>Sin Definir</label>
              </fieldset>
              <fieldset id="quarterwinner4">
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label>Sin Definir</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="quarters">
            <form id="quarter3" className="quarterMatches" onSubmit="quartersSubmit(event)">
              <fieldset id="eighthwinner5">
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label>Sin Definir</label>
              </fieldset>
              <fieldset id="eighthwinner6">
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label>Sin Definir</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="quarter4" className="quarterMatches" onSubmit="quartersSubmit(event)">
              <fieldset id="eighthwinner7">
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label>Sin Definir</label>
              </fieldset>
              <fieldset id="eighthwinner8">
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label>Sin Definir</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
          </div>
          <div className="eighths">
            <form id="eighths5" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">2A</label>
              </fieldset>
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">1B</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="eighths6" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">2C</label>
              </fieldset>
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">1D</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="eighths7" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">2E</label>
              </fieldset>
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">1F</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
            <form id="eighths8" className="eightsMatches" onSubmit="eighthsSubmit(event)">
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">2G</label>
              </fieldset>
              <fieldset>
                <input type="number" className="bracketMatches" size={2} min={0} max={99} placeholder="--" />
                <label className="eighthsTeams">1H</label>
              </fieldset>
              <button type="submit" className="hidden" />
            </form>
          </div>
        </div>
        <form className="control-button" onSubmit="quickDelate(event)">
          <input className="quickDelate" type="submit" defaultValue="Resetear Brackets" />
        </form>
      </section>



    </div>
  );
}

export default Fixture;
