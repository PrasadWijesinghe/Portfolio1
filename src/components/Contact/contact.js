import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Adobe from '../../assets/adobe.png'
import Facebook from '../../assets/facebook.png'

const Contact = () => {
  return (
    <div>
      <section id="contactPage">

        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
            Each project you see here is a testament to the trust, collaboration, and shared vision I’ve had the privilege to build with incredible individuals and organizations.
            </p>

            <div className="clientImgs">
                <img src={Walmart} alt="Clients" className="clientImg"/>
                <img src={Microsoft} alt="Clients" className="clientImg"/>
                <img src={Adobe} alt="Clients" className="clientImg"/>
                <img src={Facebook} alt="Clients" className="clientImg"/>
            </div>

        </div>

        <div id="contact">

        </div>

      </section>
    </div>
  )
}

export default Contact
