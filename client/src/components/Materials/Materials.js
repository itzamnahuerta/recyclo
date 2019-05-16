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
      <div className='materials-container'>
      
        <div className="plastic materials"> 
            <span className="plastic-title"> PLASTIC </span>
            <img 
              className="plastic-bag" 
              src={require('../../media/plastic_bag.png')} 
              alt="plastic bag"
            />

            <img 
              className="plastic-bottle" 
              src={require('../../media/plastic_bottle.png')} 
              alt="plastic bottle" 
            />
            <span onClick={(e) => this.handleClick(e,0)}> > </span>

            {this.state.showContent[0] && 
              <div className="plastic-overlay" >
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
              <button onClick={(e) => this.handleClick(e, 0)}>X</button>
              </div>
            }
        </div>

        <div className="metals materials"> 
        <span className="metals-title"> METALS  </span>
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
              <div className="metals-overlay">
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
                <button onClick={(e) => this.handleClick(e, 1)}>X</button>
              </div>
            }
        </div>

        <div className="textile materials"> 
        <span className="textile-title"> TEXTILE </span>
        <img 
          className="pants" 
          src={require('../../media/pants.png')} 
          alt="pants"
        />

        <img 
          className="shirt" 
          src={require('../../media/shirt.png')} 
          alt="tshirt" 
        />
        <span onClick={(e) => this.handleClick(e,2)}> > </span>

            {this.state.showContent[2] && 
              <div className="textile-overlay">
                Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.Amet dolore exercitation labore proident do aliquip voluptate enim pariatur quis magna veniam aliqua. Incididunt fugiat labore proident mollit ut nostrud Lorem. Qui id reprehenderit Lorem nisi ea incididunt non Lorem qui. Elit consequat velit consequat consequat ea minim do amet.
                <button onClick={(e) => this.handleClick(e, 2)}>X</button>
              </div>
            }
        </div>

        <div className="mix-paper materials">
        <span className="mix-paper-title"> MIX-PAPER  </span>

        <img 
          className="paper-cup" 
          src={require('../../media/mix_paper_cup.png')} 
          alt="paper cup"
        />

        <img 
          className="newspaper" 
          src={require('../../media/newspaper.png')} 
          alt="newspaper" 
        /> 
        <span onClick={(e) => this.handleClick(e,3)}> > </span>
            {this.state.showContent[3] && 

              <div className="mix-paper-overlay">
              <span>newspapers, magazines, catalogs </span>
              <span> receipts</span>
              <span>wrapping paper </span>
              <span>envelopes, including window envelopes </span>
              <span>softcover books (no hardcover books) </span>
              <span>cardboard boxes, including pizza boxes (first throw away the liner) </span>
              <span> egg cartons</span>
              <span>paper bags </span>
              <span> paper towel rolls</span>
              <span> paper cups</span>
              <span> Do not include: food-contaminated paper, hardcover books, bubble wrap, photographs, tissues, napkins, paper towels, tissue paper or waxed and plastic-coated paper (example: candy wrappers)</span>
              <span> </span>
              </div>
            }
        </div> 
      </div>
    )
  }
}
