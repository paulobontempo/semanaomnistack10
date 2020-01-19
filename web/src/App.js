import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude ] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      }, {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username}  onChange={e => setGithubUsername(e.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs}  onChange={e => setTechs(e.target.value)} />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/8206586?v=4" alt="Paulo Bontempo"/>
              <div className="user-info">
                <strong>Paulo Bontempo</strong>
                <span>JAVA, PHP, Ionic</span>
              </div>
            </header>
            <p>Arquiteto de Software na Mbamobi em tempo integral e criador do life-tally</p>
            <a href="https://github.com/paulobontempo">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/8206586?v=4" alt="Paulo Bontempo"/>
              <div className="user-info">
                <strong>Paulo Bontempo</strong>
                <span>JAVA, PHP, Ionic</span>
              </div>
            </header>
            <p>Arquiteto de Software na Mbamobi em tempo integral e criador do life-tally</p>
            <a href="https://github.com/paulobontempo">Acessar perfil no github</a>
          </li>
        </ul>

        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/8206586?v=4" alt="Paulo Bontempo"/>
              <div className="user-info">
                <strong>Paulo Bontempo</strong>
                <span>JAVA, PHP, Ionic</span>
              </div>
            </header>
            <p>Arquiteto de Software na Mbamobi em tempo integral e criador do life-tally</p>
            <a href="https://github.com/paulobontempo">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/8206586?v=4" alt="Paulo Bontempo"/>
              <div className="user-info">
                <strong>Paulo Bontempo</strong>
                <span>JAVA, PHP, Ionic</span>
              </div>
            </header>
            <p>Arquiteto de Software na Mbamobi em tempo integral e criador do life-tally</p>
            <a href="https://github.com/paulobontempo">Acessar perfil no github</a>
          </li>
        </ul>

        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/8206586?v=4" alt="Paulo Bontempo"/>
              <div className="user-info">
                <strong>Paulo Bontempo</strong>
                <span>JAVA, PHP, Ionic</span>
              </div>
            </header>
            <p>Arquiteto de Software na Mbamobi em tempo integral e criador do life-tally</p>
            <a href="https://github.com/paulobontempo">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/8206586?v=4" alt="Paulo Bontempo"/>
              <div className="user-info">
                <strong>Paulo Bontempo</strong>
                <span>JAVA, PHP, Ionic</span>
              </div>
            </header>
            <p>Arquiteto de Software na Mbamobi em tempo integral e criador do life-tally</p>
            <a href="https://github.com/paulobontempo">Acessar perfil no github</a>
          </li>
        </ul>
      
      </main>
    </div>
  );
}

export default App;
