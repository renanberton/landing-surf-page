import './style.scss';

export function WhatsAppIcon() {
  return (
   <div className="wapp-icon">
    <a href="https://wa.me/5511976573355" className="whatsapp"  target="_blank" rel="noopener noreferrer">
      <img src={process.env.PUBLIC_URL + '/icons/wapp.png'} alt="WhatsApp Flutuante" />
    </a>
   </div>
  );
}

