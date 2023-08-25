import './style.scss';

export function Header() {
  const handleMenuClick = (event: any, targetId: string) => {
    event.preventDefault();

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <a href="#intro" onClick={(e) => handleMenuClick(e, '#intro')}>AULAS</a>
            </li>
            <li>
              <a href="#fotos" onClick={(e) => handleMenuClick(e, '#fotos')}>FOTOS</a>
            </li>
            <li>
              <a href="#contato" onClick={(e) => handleMenuClick(e, '#contato')}>CONTATO</a>
            </li>
          </ul>
        </nav>
      </header>
   )
}