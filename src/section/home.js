
import '../../src/assets/_home.scss';

function Home() { 
  return (
    <section id="s-home">
    <div className="grid-layout">
      <div id="home">
        <div id="home-container-text">
          <h1 className="delayMediumReveal">
            Olá, eu sou<br />
            <span id="home-name">Letícia Silva.</span><br />
            <span className="typewriter">
              técnico de TI e QA
            </span>
          </h1>
          <a
            href="https://www.linkedin.com/in/let%C3%ADcia-silva-b48521163/"
            rel="noopener"
            target="_blank"
            className="delayExtraBigReveal"
          >
            Linkedin
          </a>
        </div>
        <div id="home-container-photo">
          <div id="home-photo">
            {/* <img
              src="src/assets/image/logo-svg-lab.svg"
              alt="Logo trem"
              // onLoad="SVGInject(this)"
              id="logo-lab"
              className="object"
              width="500px"
              height="500px"
            /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Home;
