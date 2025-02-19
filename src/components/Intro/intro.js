import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello" > Hello </span>
            <span className="introText" > I'm <span className="introName">Prasad</span> <br/>Website Designer </span>

            <p className="introPara">I am a skilled web Designer with expreince in creating visually<br/>
               appealing and user freindly websites. </p>

               <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
        </div>

        <img src={bg} alt="profile" className="bg"/>

      </section>

    </div>
  )
}

export default Intro
