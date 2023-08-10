import './style.scss';

const dataIcons = [
   {
     id: 1,
     imagem: '/icons/icone1.png',
     texto: 'Professores Experientes',
   },
   {
     id: 2,
     imagem: '/icons/icone2.png',
     texto: 'Preço Justo',
   },
   {
     id: 3,
     imagem: '/icons/icone3.png',
     texto: 'Equipamentos de Qualidade',
   },
   {
     id: 4,
     imagem: '/icons/icone4.png',
     texto: 'Segurança e 1º socorros',
   },
   {
     id: 5,
     imagem: '/icons/icone5.png',
     texto: 'Experiência Garantida',
   },
   {
     id: 6,
     imagem: '/icons/icone6.png',
     texto: 'Praia Privilegiada',
   },
 ];

export function Icons() {
   return (
      <div className="box-icons">
        <h3>Vantagens</h3>
        <div className="icons">
          {dataIcons.map((icons, key) => {
            return (
              <div className="container-icons" key={key}>        
                <img src={process.env.PUBLIC_URL + icons.imagem } alt="Icone de aula" /> 
                <span>{icons.texto}</span>
              </div>
            )
          })}
        </div>
        <a href="/">
          Agendar Aulas
        </a>
      </div>
   )
}