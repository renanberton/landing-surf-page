import './style.scss';
import { WhatsAppIcon } from '../Whatsapp';

export function Banner() {
   return (
      <div className='banner' style={{ 
         backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/banner.jpg'})`,
         backgroundSize: '100%',
         backgroundRepeat: 'no-repeat'}}>
           <h1>APRENDA A SURFAR CONOSCO</h1>
           <a className='button' href="https://wa.me/5511976573355">Quero aprender</a>
            <WhatsAppIcon />
       </div>
   )
}