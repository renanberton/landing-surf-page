import './style.scss';

export function Banner() {
   return (
      <div className='banner' style={{ 
         backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/banner.jpg'})`,
         backgroundSize: '100%',
         backgroundRepeat: 'no-repeat'}}>
           <h1>APRENDA A SURFAR CONOSCO</h1>
           <a href="/">Quero aprender</a>
       </div>
   )
}