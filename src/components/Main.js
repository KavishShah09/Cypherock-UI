import React from 'react'
import Sync from "../images/Sync.png"
import Toggle from "../images/Toggle.png"
import Search from "../images/Search.png"
import Add from "../images/Add.png"
import Bin from "../images/Bin.png"
import HighLow from "../images/HighLow.png"
import ArrowDown from "../images/ArrowDown.png"

function Main() {


    const handleOnClick = () => {
        if (document.getElementById('sort').style.display === "none") {
            document.getElementById('sort').style.display = "block"
        } else {
            document.getElementById('sort').style.display = "none"
        }
    }
    
    return (
        <div className="main">
            <div className="mr-4 mt-3 myClass">
                <img className="mr-3" src={Sync} alt="" width="20" height="20" />
                <span className="text-sync" >Synchronized</span>
                <span className="ml-3 mr-3" >|</span>
                <img className="" src={Toggle} alt="" width="22" height="12" />
            </div>
            <form className="form-inline mr-4 mt-4 myClass">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text search"><img src={Search} alt="" width="15" height="15" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search Your Coin." />
                    <div className="search ml-3" >
                        <button className="btn text-color search mr-3"><img className="mr-3" src={Add} alt="" width="15" height="15" />ADD COIN</button>
                        |
                        <button className="btn text-color search ml-3 mr-3"><img className="mr-3" src={Bin} alt="" width="16" height="20" />DELETE</button>
                    </div>
                </div>
            </form>
            <h3 className="text-yellow mb-4">Wallet 1</h3>
            <small className="text-white ml-5 float-left total">Total Coins - 7</small>
            <button className="btn myClass text-color sort" onClick={handleOnClick}>
                <span><img src={HighLow} alt="" width="15" height="15" /></span>
                <span className="ml-2 mr-4" >Amount High-Low</span>
                <span><img src={ArrowDown} alt="" width="8" height="5" /></span>
            </button>
            <hr/>
            <div className="dropdown-sort myClass" id="sort">
                <p className="ml-3 mr-3 mb-2 text-color" >Amount High-Low</p>
                <p className="ml-3 mr-3 mb-2 text-unselected" >Amount Low-High</p>
                <p className="ml-3 mr-3 mb-2 text-unselected" >Arrang A-Z</p>
                <p className="ml-3 mr-3 mb-2 text-unselected" >Arrang Z-A</p>
            </div>
            
        </div>
    )
}

export default Main
