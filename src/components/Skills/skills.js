import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import Webdesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDecs">I am a skilled and passionate webdesigner with experience in creting vissually appealing and user-freindly websites.I have a strong understading of design and a keen eye for detail.I am proficient in HTML,CSS and Javascript, as well as design software such as a abode photoshop and Illustrator. </span>

    <div className="skillBars">

    <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Designing user-centered interfaces that are both functional and visually appealing</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Webdesign} alt="" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Building responsive and engaging websites tailored to diverse user needs</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Creating innovative app layouts that prioritize usability and aesthetics</p>
                </div>
            </div>


    </div>
        

    </section>
  )
}

export default Skills
