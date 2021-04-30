import React, { useState } from 'react';
import './styles/style.css'
import * as Scroll from 'react-scroll';
import { Element, Link } from 'react-scroll'
import EarthLogo from './images/earth-logo.png'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Mountains from './components/Mountains'

function App() {
    const [linkClicked, setLinkClicked] = useState('dot1')

    function handleClick(name) {
        setLinkClicked(name)
        console.log(name)
    }

    const dot1 = {
        marginTop: '21px',
    }
    
    const dot2 = {
        marginTop: '62px'
    }

    const dot3 = {
        marginTop: '102px',
    }
    

    function getStyleDot() {
        if (linkClicked === 'dot1') {
            return dot1
        } else if (linkClicked === 'dot2') {
            return dot2
        } else if (linkClicked === 'dot3') {
            return dot3
        }
    }

    function getStyleLink1(dotName) {
        if (linkClicked === dotName) {
            return 'link-clicked'
        } else {
            return 'link'
        }
    }

    const colorPage1 = {color: 'rgb(95, 106, 250)', transition: '0.5s', borderBottom: '1px solid rgb(95, 106, 250)'}
    const colorPage2 = {color: 'rgb(255, 136, 0)', transition: '0.5s', borderBottom: '1px solid rgb(255, 136, 0)'}
    const colorPage3 = {color: 'rgb(68, 245, 83)', transition: '0.5s', borderBottom: '1px solid rgb(68, 245, 83)'}

    function getStyleName() {
        if (linkClicked === 'dot1') {
            return colorPage1
        } else if (linkClicked === 'dot2') {
            return colorPage2
        } else if (linkClicked === 'dot3') {
            return colorPage3
        }
    }

    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/">
                        <section className="home-wrapper">
                            <div>
                                <img className="earth-logo" src={EarthLogo}/>
                            </div>
                            <div className="website-name">
                                <h1 style={getStyleName()}>Planet Earth</h1>
                            </div>
                            <div className="buttons">
                                <div style={getStyleDot()} className="dot">
                                </div>
                                <p className={getStyleLink1('dot1')}><Link onClick={() => handleClick('dot1')} activeClass="active" className="test1" to="page1" spy={true} smooth={true} duration={500} >Mountains</Link></p>
                                <p className={getStyleLink1('dot2')}><Link onClick={() => handleClick('dot2')} activeClass="active" className="test2" to="page2" spy={true} smooth={true} duration={500} >Canyons</Link></p>
                                <p className={getStyleLink1('dot3')}><Link onClick={() => handleClick('dot3')} activeClass="active" className="test3" to="page3" spy={true} smooth={true} duration={500} >Nature</Link></p>
                            </div>
                            <Element name="page1" className="element1">
                                <div className="page1-content">
                                    <h2>Mountains</h2>
                                    <p>Sed ac orci id ante varius tristique. Donec eleifend tortor ac quam dignissim, sed ultricies massa tristique.</p>
                                    <div className="button-container">
                                        <a href="/Mountains"><button className="btn-read-white">Read more</button></a>
                                    </div>
                                </div>
                            </Element>
                            <Element name="page2" className="element2">
                                <div className="page2-content">
                                    <h2>Canyons</h2>
                                    <p>Donec elit nisl, luctus a neque tempus, laoreet ultrices urna. Quisque non lacus vitae neque semper venenatis.</p>
                                    <div className="button-container">
                                        <button className="btn-read-white">Read more</button>
                                    </div>
                                </div>
                            </Element>

                            <Element name="page3" className="element3">
                                <div className="page3-content">
                                    <h2>Nature</h2>
                                    <p>Donec tempor augue vel sem ultricies, in viverra mi pretium. Nulla accumsan massa id lectus maximus, vitae varius turpis gravida.</p>
                                    <div className="button-container">
                                        <button className="btn-read-white">Read more</button>
                                    </div>
                                </div>
                            </Element>
                            <footer>
                                <div className="footer-wrapper">
                                    <p>Made by Artluevil</p>
                                </div>
                            </footer>
                        </section>
                    </Route>
                    <Route exact path="/Mountains">
                        <Mountains getStyleDot={getStyleDot} handleClick={handleClick}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App