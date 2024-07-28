import React from 'react';
import './Hero.css';
import Carousel from '../Carousel/Carousel';
import emmanuel from './img/img-hero.webp';

function Hero() {
    return (
    <div>
        <div className='section-1'>
            <div className='about-me'>
                <h1>Emmanuel Solorzano's Portfolio</h1>
                <div className='content-wrapper'>
                    <div className='picture-me foto'>
                        <img src={emmanuel} alt='me'/>
                    </div>
                    <div className='text-container'>
                    <p>
                        Hi there! 👋 I'm a Software Engineer 👨🏾‍💻 who graduated from Tecnológico de Monterrey in Zapopan, Jalisco 🇲🇽. 
                        With a deep passion for full-stack development and artificial intelligence 🧠, I am dedicated to pushing the boundaries 
                        of technology and innovation. My enthusiasm for continuous learning drives me to take courses regularly, ensuring that I stay 
                        at the forefront of the latest technological advancements 💻. I am always seeking new challenges and opportunities to enhance 
                        my skills and knowledge, striving to contribute to impactful projects and the broader tech community.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section-2'>
            <div className='proyectos'>
                <h2>Recent Projects</h2>
                <Carousel />
            </div>
            <footer>
                Built with ❤️ using React and Django3.
            </footer>
        </div>

    </div>
  );
}
export default Hero;

