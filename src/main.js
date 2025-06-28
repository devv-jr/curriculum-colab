import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <section class="hero-section">
      <div class="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
      </div>
      
      <h1>¡Bienvenido a mi Currículum!</h1>
      <p class="hero-subtitle">Desarrollador Full Stack apasionado por crear soluciones innovadoras</p>
      
      <div class="cta-buttons">
        <a href="/about.html" class="btn-primary">Conoce más sobre mí</a>
        <a href="/projects.html" class="btn-secondary">Ver mis proyectos</a>
      </div>
    </section>
    
    <div class="card">
      <p>Contador de visitas:</p>
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
