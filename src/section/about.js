import ilustracao from '../assets/image/ilustracao.webp';
import html from '../assets/icons/html-cor.svg';
import css from '../assets/icons/css-cor.svg';
import js from '../assets/icons/js-cor.svg';

import '../../src/assets/_about.scss';

function About() { 
  return (

    <section id="s-about">
        <div className="grid-layout">
          <div id="about">
            <div id="about-photo">
              <img
                src={ilustracao}
                width="400px"
                height="400px"
                alt="ilustração"
                className="delayMediumReveal"
                id="photo"
              />
              <div className="about-figure figure-one icon-one delayExtraBigReveal">
                <img
                  src={html}
                  width="45px"
                  height="45px"
                  alt="ícone html"
                />
              </div>
              <div className="about-figure figure-two icon-two delayExtraBigReveal">
                <img
                  src={css}
                  width="45px"
                  height="45px"
                  alt="ícone css"
                />
              </div>
              <div
                className="about-figure figure-three icon-three delayExtraBigReveal"
              >
                <img
                  src={js}
                  width="45px"
                  height="45px"
                  alt="ícone javascript"
                />
              </div>
            </div>
            <article id="about-text">
              <h2 className="delaySmallReveal">Quem sou <span>.</span></h2>
              <p className="delayMediumReveal">
                Meu nome é Letícia Silva.
                Sou freelancer como Tester/Quality Assurance.
                Desenvolvo testes, e sou técnica de TI como emprego principal.
                Sou estudante de ADS e Engenharia da Computação, apaixonada por infra e dados.
              </p>
            </article>
          </div>
        </div>
      </section>

  );
}

export default About;