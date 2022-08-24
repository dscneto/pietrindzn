import './App.css'

function App() {
  return(
    <div>
      <div class="navbar">
        <h1>Home</h1>
        <div>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portifólio</a>
          <a href="#partnerships">Parcerias</a>
          <a href="#contact">Contato</a>
        </div>
      </div>

      <section id="about">
        <h4>Sobre</h4>
      </section>

      <section id="services">
        <h4>Serviços</h4>
      </section>

      <section id="portfolio">
        <h4>Portifolio</h4>
      </section>

      <section id="partnerships">
        <h4>Parcerias</h4>
      </section>

      <section id="contact">
        <h4>Contato</h4>
      </section>
    </div>
  )
}

export default App
