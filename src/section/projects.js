import '../../src/assets/_projects.scss';

function Projects() {
    return (
      

        <section id="s-projects">
        <div className="grid-layout">
          <h2 className="delaySmallReveal">Formação <span>.</span></h2>
          <div id="projects">
            <article className="intervalCardReveal teslabank">
              <h3>Técnico Em Informática</h3>
              <p>
                E.E. Adalgisa de barros </p>
               <p> Ensino médio integrado a educação profissional 
               
                Eixo: Técnologia da Informação </p>
            

              <a
               
                // rel="noopener"
                // target="_blank"
                // id="teslabank"
                >2017-2019
              </a>
            </article>

            <article className="intervalCardReveal naped">
              <h3>Engenharia da Computação</h3>
              <p>  Bacharel  </p>
              <p> Instituto Federal de Ciência e Tecnologia</p>
              

              <a
                
                // rel="noopener"
                // target="_blank"
                // id="naped"
                >2021-2028
              </a>
            </article>

            <article className="intervalCardReveal naped">
              <h3>Análise e desenvolvimento de Sistemas</h3>
              <p> Técnologo</p>
              <p>Faculdade Invest de Ciência e Tecnologia</p>
            
         
          <a
            
            // rel="noopener"
            // target="_blank"
            className="delayExtraBigReveal"
            >2022-2024
          </a>
        </article>
       
        </div>
    </div>
      </section>

  


    );
  }
  
  export default Projects;
  