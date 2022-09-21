import '../../src/assets/_services.scss';

function Services() {
    return (
      

        <section id="s-services">
        <div class="grid-layout">
          <h2 class="delaySmallReveal">Curriculo - Contato <span>.</span></h2>
          <div id="services">
            <article className="intervalCardReveal">
             
              <h3>Curriculo</h3>
              <p> Clique no link abaixo para ver mais detalhadamente sobre meu curriculo </p>
              

              <br /><br /><br />

              {/* <!-- gambiarra - ignore --> */}

              <div id="home-container-text">
              <a

              href="https://drive.google.com/file/d/1B33P2tF0I4MKzC72f74CXCcLxHCA24KO/view?usp=sharing" download="Curriculo"
              
              
             



                >
              
               
                Dowload PDF
                
            
                </a>
                </div>
                </article>
    
            

            {/* gambiarra - ignore */}
            
            <article className="intervalCardReveal">
              
              <h3>Contato - WhatsApp</h3>
             <p> Clique no link abaixo para iniciar uma conversa no WhatsApp </p>
              <br /><br /><br />
             <div id="home-container-text">
             <a
         
               href="https://api.whatsapp.com/send?phone=5565992476262"
              
               
               >

               
          
              
                iniciar conversa
              

              
               </a>
               </div>
             </article>
           </div>
         </div>
       </section>

       

    );
  }
  
  export default Services;
  