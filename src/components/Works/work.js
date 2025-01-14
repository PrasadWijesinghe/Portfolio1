import React from 'react'
import './work.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
            
            <h2 className="workstitle"> My portfolio</h2>
            <span className="worksDesc"> Welcome to my portfolio—a reflection of creativity and precision. Here, you'll discover thoughtfully crafted UI/UX designs, innovative app experiences, and dynamic websites, each tailored to blend functionality with elegance. Explore my work and witness the harmony of design and purpose </span>

            <div className="worksImgs">
                <img src={portfolio1} alt="" className="workImg"/>
                <img src={portfolio2} alt="" className="workImg"/>
                <img src={portfolio3} alt="" className="workImg"/>
                <img src={portfolio4} alt="" className="workImg"/>
                <img src={portfolio5} alt="" className="workImg"/>
                <img src={portfolio6} alt="" className="workImg"/>
            </div>

    </section>
  )
}

export default Works
