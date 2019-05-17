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
    let newContent = this.state.showContent ;
    newContent[index] = !newContent[index];
    this.setState({
      showContent: newContent
    })
  }
  
  render() {
    return (
      <div className="materials-container">
      
        <div className="plastic materials"> 
            <div className="material-title"> PLASTIC </div>
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
              <div className="plastic-overlay descr" >
              Although Americans recycle more than 2.4 billion pounds of plastic each year, it only makes up around 27 percent of the waste. <br/>

              PET plastic is the most common material used for single-use bottled beverages, because it is inexpensive, lightweight, unbreakable and easy to recycle. It takes more than 1.5 million barrels of oil to produce a year's supply of water bottles. That's enough oil to fuel 100,000 cars for a year. <br/>

              Plastic grocery and produce sacks are commonly placed in recycle bins. These bags can shut down an entire recycling plant and should be kept out of recycling bins. Plastic bags are often collected in barrels at grocery stores, and usually end up as plastic lumber<br/>

              Often plastic will be contaminated with food or liquid as its predominantly used for food and drink packaging, so it's vital to keep it clean before recycling.
              </div>
            }
        </div>

        <div className="metals materials"> 
        <div className="material-title"> METALS  </div>
          <img 
            className="tin-can" 
            src={require('../../media/tin_can.png')} 
            alt="tin can"
          />

          <img 
            className="metal-seat" 
            src={require('../../media/metal_seat.png')} 
            alt="metal seat" 
          /> 
        <span onClick={(e) => this.handleClick(e,1)}> > </span>
            {this.state.showContent[1] && 
              <div className="metals-overlay descr">
              Metal is widely recycled within New York City, and Americans cumulatively use an average of 2.7 million tonnes of aluminium per year. Recycling steel and tin cans is vital as it saves 74% of the energy used to produce them. Each can recycled saves enough energy to power a television for three hours! <br/>

              When recycling aluminium cans it's important to make sure that they are clean, as if they are contaminated with any food stuff they, and the recyclables near them, become unusable.<br/>

              71% of steel cans in circulation are recycled, which makes them the most recycled packaging product. Recycling steel saves at least 75% of the energy it would take to create steel from raw materials. That's enough energy to power 18 million homes. <br/>

              Kitchen foil is also recyclable but the aforementioned also applies. Altogether, America discarded 450,000 tons of foil in 2010.

              </div>
            }
        </div>

        <div className="textile materials"> 
        <div className="material-title"> TEXTILE </div>
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
              <div className="textile-overlay descr">
                Textiles are only reusable if they are not heavily contaminated. <br/>

                The average New Yorker tosses 46 pounds of clothing and other textiles in the trash each year. All told, NYC residents discard nearly 200,000 tons of textiles every year, at a cost to taxpayers and the environment.<br/>


              </div>
            }
        </div>

        <div className="mix-paper materials">
        <div className="material-title"> MIX-PAPER</div>

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
              <div className="mix-paper-overlay descr">
                45 million tons of paper is recycled in the US each year which means that 334 pounds of paper is recycled for every person in the United States, and more Americans than ever before are continuously recycling. Recycling just one ton of paper saves enough energy to power the average American home for six months. <br/><br/>

                Contrary to popular belief, glossy magazine paper can actually be recycled, and about 45 percent of magazines are being recycled today. Recycled magazines are used to make newspaper, tissues, writing paper and paperboard.<br/><br/>

                Just over 45% of office paper is recovered for recycling today.<br/>

                More than 73% of all newspapers in the United States are collected and recycled.<br/>

                The widely available paper cardboard dairy and juice cartons are actually not very widely recyclable, and should be avoided if possible.<br/>
              </div>
            }
            
        </div> 
        </div> 
    )
  }
}









