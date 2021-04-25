import React, {useState} from 'react'
import Bitcoin from '../images/Bitcoin.png'
import Binance from '../images/Binance.png'
import Ether from '../images/Ether.png'
import Recieve from '../images/Recieve.png'
import Send from '../images/Send.png'
import BulletArrow from '../images/BulletArrow.png'
import Line from '../images/Line.png'
import Info from '../images/Info.png'
import { Modal } from 'react-bootstrap';

function Table() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSecond, setShowSecond] = useState(false);

    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const [showThird, setShowThird] = useState(false);

    const handleCloseThird = () => setShowThird(false);
    const handleShowThird = () => setShowThird(true);

    const handleOnClick = (e) => {
        e.target.classList.remove('text-white')
        e.target.classList.add('text-blue')
        if (e.target.childNodes.length > 1) {
            e.target.childNodes[2].style.display = "block"
        }
    }

    return (
        <div>
            <table className="table table-dark main container-fluid">
                <thead>
                    <tr>
                        <th className="table-head text-unselected" scope="col">Coin</th>
                        <th className="table-head text-unselected" scope="col">Holding</th>
                        <th className="table-head text-unselected" scope="col">Value</th>
                        <th className="table-head text-unselected" scope="col">Price</th>
                        <th className="table-head text-unselected" scope="col"></th>
                        <th className="table-head text-unselected" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="table-data"  scope="row"><img src={Bitcoin} alt=""/>BITCOIN</th>
                        <td className="table-data" >BTC 0.00256</td>
                        <td className="table-data" >$ 0.5268</td>
                        <td className="table-data" >$ 1.2586</td>
                        <td className="table-data" >
                            <button className="btn text-blue" onClick={handleShow}>
                                <img className="mr-1" src={Recieve} alt="" width="15" height="20" />
                                Receive
                            </button>
                        </td>
                        <td className="table-data" >
                            <button className="btn text-yellow">
                                <img className="mr-1" src={Send} alt="" width="15" height="20" />
                                Send
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-data"  scope="row"><img src={Ether} alt=""/>ETHEREUM</th>
                        <td className="table-data" >BTC 0.0025600</td>
                        <td className="table-data" >$ 0.5268</td>
                        <td className="table-data" >$ 1.2586</td>
                        <td className="table-data" >
                            <button className="btn text-blue" onClick={handleShowSecond}>
                                <img className="mr-1" src={Recieve} alt="" width="15" height="20" />
                                Receive
                            </button>
                        </td>
                        <td className="table-data" >
                            <button className="btn text-yellow">
                                <img className="mr-1" src={Send} alt="" width="15" height="20" />
                                Send
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-data"  scope="row"><img src={Binance} alt=""/>BINANCE</th>
                        <td className="table-data" >BTC 0.0025600</td>
                        <td className="table-data" >$ 0.5268</td>
                        <td className="table-data" >$ 1.2586</td>
                        <td className="table-data" >
                            <button className="btn text-blue" onClick={handleShowThird}>
                                <img className="mr-1" src={Recieve} alt="" width="15" height="20" />
                                Receive
                            </button>
                        </td>
                        <td className="table-data" >
                            <button className="btn text-yellow">
                                <img className="mr-1" src={Send} alt="" width="15" height="20" />
                                Send
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-data"  scope="row"><img src={Bitcoin} alt=""/>BITCOIN</th>
                        <td className="table-data" >BTC 0.00256</td>
                        <td className="table-data" >$ 0.5268</td>
                        <td className="table-data" >$ 1.2586</td>
                        <td className="table-data" >
                            <button className="btn text-blue" onClick={handleShow}>
                                <img className="mr-1" src={Recieve} alt="" width="15" height="20" />
                                Receive
                            </button>
                        </td>
                        <td className="table-data" >
                            <button className="btn text-yellow">
                                <img className="mr-1" src={Send} alt="" width="15" height="20" />
                                Send
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-data"  scope="row"><img src={Ether} alt=""/>ETHEREUM</th>
                        <td className="table-data" >BTC 0.0025600</td>
                        <td className="table-data" >$ 0.5268</td>
                        <td className="table-data" >$ 1.2586</td>
                        <td className="table-data" >
                            <button className="btn text-blue" onClick={handleShowSecond}>
                                <img className="mr-1" src={Recieve} alt="" width="15" height="20" />
                                Receive
                            </button>
                        </td>
                        <td className="table-data" >
                            <button className="btn text-yellow">
                                <img className="mr-1" src={Send} alt="" width="15" height="20" />
                                Send
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-data"  scope="row"><img src={Binance} alt=""/>BINANCE</th>
                        <td className="table-data" >BTC 0.0025600</td>
                        <td className="table-data" >$ 0.5268</td>
                        <td className="table-data" >$ 1.2586</td>
                        <td className="table-data" >
                            <button className="btn text-blue" onClick={handleShowThird}>
                                <img className="mr-1" src={Recieve} alt="" width="15" height="20" />
                                Receive
                            </button>
                        </td>
                        <td className="table-data" >
                            <button className="btn text-yellow">
                                <img className="mr-1" src={Send} alt="" width="15" height="20" />
                                Send
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose} centered backdrop="static" size="lg" className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Receive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="boxed">
                        <input type="radio" name="step" id="one" className="radio-inline" checked/>
                        <label className="one" for="one">1</label>
                        <img src={Line} alt=""/>
                        <img src={Line} alt=""/>
                        <input type="radio" name="step" id="two" className="radio-inline"/>
                        <label for="two">2</label>
                        <img src={Line} alt=""/>
                        <img src={Line} alt=""/>
                        <input type="radio" name="step" id="three" className="radio-inline"/>
                        <label for="three">3</label>
                    </form>
                    <span className="one text-orange">Device</span>
                    <span className="two">Verification</span>
                    <span className="three">Recieve</span>
                    <div className="text-unselected instruction" >Follow the instruction on device</div>
                    <button className="btn text-white text-left modal-button" onClick={handleOnClick}>
                        <img src={BulletArrow} className="ml-2" alt="" width="16" height="10" />
                        <span className="ml-3 unclick">
                            Select the Wallet On device
                        </span>
                        <span className="text-white float-right tick" >&#10003;</span>
                    </button>
                    <br/>
                    <button className="btn text-white text-left modal-button" onClick={handleOnClick}>
                        <img src={BulletArrow} className="ml-2" alt="" width="16" height="10" />
                        <span className="ml-3 unclick">
                            Select the Coin On device
                        </span>
                        <span className="text-white float-right tick" >&#10003;</span>
                    </button>
                    <br/>
                    <button className="btn text-white text-left modal-button" onClick={handleOnClick}>
                        <img src={BulletArrow} className="ml-2" alt="" width="16" height="10" />
                        <span className="ml-3 unclick">
                            Tap 1 card of any 4 cards
                        </span>
                        <span className="text-white float-right tick" >&#10003;</span>
                    </button>
                    <br/>
                    <br/>
                    <br/>
                </Modal.Body>
            </Modal>
            <Modal show={showSecond} onHide={handleCloseSecond} centered backdrop="static" size="lg" className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Receive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="boxed">
                        <input type="radio" name="completed" id="one" className="radio-inline" checked/>
                        <label className="one completed" for="one">&#10003;</label>
                        <img src={Line} alt=""/>
                        <img src={Line} alt=""/>
                        <input type="radio" name="step" id="two" className="radio-inline" checked/>
                        <label for="two">2</label>
                        <img src={Line} alt=""/>
                        <img src={Line} alt=""/>
                        <input type="radio" name="step" id="three" className="radio-inline"/>
                        <label for="three">3</label>
                    </form>
                    <span className="one text-mustard">Device</span>
                    <span className="two text-orange">Verification</span>
                    <span className="three">Recieve</span>
                    <div className="btn text-white modal-button address">
                        <span className="ml-3 unclick text-address">
                            25BKJNKNLJL58fjkdhfk26dnnfds15
                        </span>
                    </div>
                    <div className="text-unselected instruction" >Verify address on device</div>
                    <button className="btn text-white text-left modal-button" onClick={handleOnClick}>
                        <img src={BulletArrow} className="ml-2" alt="" width="16" height="10" />
                        <span className="ml-3 unclick">
                            Please match the address to be shown in X1 wallet
                        </span>
                        <span className="text-white float-right tick" >&#10003;</span>
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Modal.Body>
            </Modal>
            <Modal show={showThird} onHide={handleCloseThird} centered backdrop="static" size="lg" className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Receive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="boxed">
                        <input type="radio" name="completed" id="one" className="radio-inline" checked/>
                        <label className="one completed" for="one">&#10003;</label>
                        <img src={Line} alt=""/>
                        <img src={Line} alt=""/>
                        <input type="radio" name="completedSecond" id="two" className="radio-inline" checked/>
                        <label for="two" className="completed">&#10003;</label>
                        <img src={Line} alt=""/>
                        <img src={Line} alt=""/>
                        <input type="radio" name="step" id="three" className="radio-inline" checked/>
                        <label for="three">3</label>
                    </form>
                    <span className="one text-mustard">Device</span>
                    <span className="two text-mustard">Verification</span>
                    <span className="three text-orange">Recieve</span>
                    <div className="text-unselected instruction" >Coin Address</div>
                    <div className="btn text-white text-left modal-button ">
                        <span className="ml-3 unclick text-address verify">
                            25BKJNKNLJL58fjkdhfk26dnnfds15
                        </span>
                        <button className="btn float-right text-yellow copy">Copy</button>
                    </div>
                    <br/>
                    <br/>
                    <div className="info text-verify">
                        <img src={Info} alt="" width="20" height="20" />
                        <span className="ml-2" >address Verifyed</span>
                    </div>
                    <br/>
                    <br/>
                    <button className="btn text-verify info-btn">Re-verify</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Table
