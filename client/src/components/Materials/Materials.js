
import React, { Component } from 'react'




export default class Materials extends Component  {
  render() {
    return (
      <div className='Materials'>
        <div className="Plastic"> 
            <span className="PlasticTitle"> PLASTIC </span>
            <img className="PlasticBag" src={ require('../../media/plastic_bag.png') } alt="plastic bag" />
            <img className="PlasticBottle" src={ require('../../media/plastic_bottle.png') } alt="plastic bottle" />
            {/* <span className="PlasticContentClick"> > </span>  */}

            <div className="PlasticOverlay"> 
              <div className="PlasticContent"> 
              Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
              </div>
            </div>
            
        </div>
        <div className="Metals"> METALS </div>
        <div className="Textile"> TEXTILE</div>
        <div className="MixPaper">MIX-PAPER </div> 
      </div>
    )
  }
}
