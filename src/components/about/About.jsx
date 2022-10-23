import './about.css'
import  { FaAmericanSignLanguageInterpreting, FaBitbucket, FaCss3, FaDatabase, FaGit, FaGithub, FaHtml5, FaInstagram, FaJava, FaJs, FaReact, FaTwitter } from 'react-icons/fa'

const About = () => {
    return ( 
        <section className="about-container">
            <div className="aboutme-container">
                <div className='description'>   
                    <h2>About me 🤙 __ </h2><br/>                 
                    <p>My name is Richard, I live in Chiclayo, Perú. I am a simple
                        person, who like to learn new things, especially referred to 
                        technology (software development).
                    </p>

                    <p>I love to share knowledge, to work in a team, be friendly. 
                        I consider myself a person easy to relate, mainly listen to 
                        others, this is very important for me.
                    </p>
                </div>
                <div className="photo">
                    <img src="https://andree97rb.github.io/richardrb-page/static/media/photo.14f7d696.png"/>
                </div>
            </div>  
            <div className="skills-container" style={{paddingBottom:"0"}}>
                <div className='description'>   
                    <h2>Skills 🔧 __</h2> 
                    <div className='tech'>
                        <FaHtml5 className='orange'/>
                        <FaCss3 className='blue'/>
                        <FaJs className='yellow'/>
                        <FaReact className='blue'/>
                        <FaJava className='red'/>
                        <FaDatabase className='brown'/>
                        <FaGit className='red'/>
                        <FaGithub className='blue'/>
                        <FaBitbucket className='blue'/>
                    </div>
                </div>
            </div>       
        </section>
     );
}
 
export default About;