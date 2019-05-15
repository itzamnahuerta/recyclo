import React, { Component } from 'react'

export default class Materials extends Component  {
  constructor(){
    super();
    this.state = {
      showContent: [false,false,false,false]
    }
    this.handleClick= this.handleClick.bind(this)
  }

  handleClick = (e,index) => {
    // e.preventDefault();
    let newContent = this.state.showContent ;
    newContent[index] = !newContent[index];
    this.setState({
      showContent: newContent
    })
  }
  
  render() {
    return (
      <div className='Materials'>
        <div className="Plastic"> 
            <span className="PlasticTitle"> PLASTIC </span>
            <img 
              className="PlasticBag" 
              src={require('../../media/plastic_bag.png')} 
              alt="plastic bag"
            />

            <img 
              className="PlasticBottle" 
              src={require('../../media/plastic_bottle.png')} 
              alt="plastic bottle" 
            />
            <span onClick={(e) => this.handleClick(e,0)}> > </span>

            {this.state.showContent[0] && 
              <div className="PlasticOverlay" >
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
              </div>
            }
        </div>

        <div className="Metals"> 
        <span className="MetalsTitle"> METALS  </span>
        {/* <img 
            className="PlasticBag" 
            src={require('../../media/plastic_bag.png')} 
            alt="plastic bag"
          />

          <img 
            className="PlasticBottle" 
            src={require('../../media/plastic_bottle.png')} 
            alt="plastic bottle" 
          /> */}
        <span onClick={(e) => this.handleClick(e,1)}> > </span>
            {this.state.showContent[1] && 
              <div className="MetalsOverlay">
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
              </div>
            }
        </div>

        <div className="Textile"> 
        <span className="TextileTitle"> TEXTILE </span>
        <img 
          className="Pants" 
          src={require('../../media/pants.png')} 
          alt="pants"
        />

        <img 
          className="Shirt" 
          src={require('../../media/shirt.png')} 
          alt="shirt" 
        />
        <span onClick={(e) => this.handleClick(e,2)}> > </span>

            {this.state.showContent[2] && 
              <div className="TextileOverlay">
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.

              </div>
            }
        </div>

        <div className="MixPaper">
        <span className="MixPaperTitle"> MIX-PAPER  </span>

        {/* <img 
          className="PlasticBag" 
          src={require('../../media/plastic_bag.png')} 
          alt="plastic bag"
        />

        <img 
          className="PlasticBottle" 
          src={require('../../media/plastic_bottle.png')} 
          alt="plastic bottle" 
        /> */}
        <span onClick={(e) => this.handleClick(e,3)}> > </span>
            {this.state.showContent[3] && 

              <div className="MixPaperOverlay">
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
              </div>
            }
        </div> 
      </div>
    )
  }
}
