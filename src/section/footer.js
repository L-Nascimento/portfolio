import logofooter from '../assets/image/lsn-logo-footer.jpeg'

import '../../src/assets/_footer.scss';
import '../../src/assets/_reset.scss';
function Footer() { 
  return (

    <footer>
          <div class="grid-layout">
            <p id="direitos-autorais">© L.Silva</p>
            <div>
              <p>Powered by</p>
              <img
                src={logofooter}
                alt="logo do trem"
                width="60px"
                height="60px"
              />
            </div>
          </div>
        </footer>

  );
}

export default Footer;
