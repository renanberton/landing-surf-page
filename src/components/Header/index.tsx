import './style.scss';

export function Header() {
   return (
      <header>
        <div className="box-logo">
          <a href="/">
            <img src={process.env.PUBLIC_URL + '/icons/logo.png'} alt="Icone da página" /> 
          </a>
          <a href="/">
            <span>ALOHA <br/> SURF <br/> SCHOOL <br/></span>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">AULAS</a>
            </li>
            <li>
              <a href="/">FOTOS</a>
            </li>
            <li>
              <a href="/">CONTATO</a>
            </li>
          </ul>
        </nav>
      </header>
   )
}