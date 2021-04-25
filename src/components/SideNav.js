import React from 'react'
import Portfolio from "../images/Portfolio.png";
import Wallet from "../images/Wallet.png";
import Transactions from "../images/Transactions.png";
import Tutorials from "../images/Tutorials.png";
import Settings from "../images/Settings.png";

function SideNav() {
    return (
        <div className="sidenav">
            <a href="/"><img className="mr-3" src={Portfolio} alt="" width="23" height="23"/>Portfolio</a>
            <button className="text-yellow dropdown-wallet"><img className="mr-3" src={Wallet} alt="" width="23" height="23"/>Wallets</button>
            <div className="dropdown-container">
                <a href="/" className="dropdown-links text-orange">Wallet 1 <span className="ml-3 dots">...</span></a>
                <a href="/" className="dropdown-links text-mustard">Wallet 2 <span className="ml-3 dots">...</span></a>
                <a href="/" className="dropdown-links mb-3 text-mustard">Wallet 3 <span className="ml-3 dots">...</span></a>
            </div>
            <a href="/"><img className="mr-3 navlink" src={Transactions} alt="" width="23" height="23"/>Last Transaction</a>
            <a href="/"><img className="mr-3 navlink" src={Tutorials} alt="" width="23" height="23"/>Tutorial</a>
            <a href="/"><img className="mr-3 navlink" src={Settings} alt="" width="23" height="23"/>Setting</a>
            <button className="btn beneficiary" >Make Beneficiary</button>
            <button className="btn text-white fixed-bottom support" >Support</button>
        </div>
    )
}

export default SideNav
