import './footer.css'
import  { FaAt, FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer className='footer-container'>
            <div className='icon-container'>
                <a href='https://www.facebook.com/profile.php?id=100078156611385' target="_blank">
                    <div className='icon fb-bg'>
                        <FaFacebook/>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/andreeramosbenites/' target="_blank">
                    <div className='icon fb-bg'>
                        <FaLinkedin/>
                    </div>
                </a>
                <a href = "mailto: richand_9702@outlook.com" target="_blank">
                    <div className='icon fb-bg'>
                        <FaEnvelope/>
                    </div>
                </a> 
              
            </div>
            <div className='copy-data'>
                Copyright &copy;2022 Richand
            </div>
        </footer>
     );
}
 
export default Footer;