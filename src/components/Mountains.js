import React, { useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import MountEverest from '../images/mount-everest.jpg'
import Swipe from 'react-easy-swipe'
import { useMediaQuery } from 'react-responsive'
import { withRouter } from 'react-router';


function Mountains() {

    const [linkClicked, setLinkClicked] = useState('page1')

    const isMobile = useMediaQuery({
        query: '(min-width: 800px)'
    })

    function handleSwipe(to) {
        scroller.scrollTo(to, {
            spy: true,
            smooth: true,
            duration: 500,
        })
    }

    function handleClick(name) {
        setLinkClicked(name)
    }

    const dot1 = {
        marginTop: '15px',
        backgroundColor: '#8a8a8a'
    }

    const dot2 = {
        marginTop: '60px',
        backgroundColor: 'yellow',
    }

    const dot3 = {
        marginTop: '105px',
        backgroundColor: 'black'
    }

    const link1 = {
        color: '#8a8a8a',
    }

    const link2 = {
        color: 'yellow',
    }

    const link3 = {
        color: 'black',
    }

    function styleDot() {
        if (linkClicked === 'page1') {
            return dot1
        } else if (linkClicked === 'page2') {
            return dot2
        } else if (linkClicked === 'page3') {
            return dot3
        }
    }

    function styleLink() {
        if (linkClicked === 'page1') {
            return link1
        } else if (linkClicked === 'page2') {
            return link2
        } else if (linkClicked === 'page3') {
            return link3
        }
    }

    return (
        <>
            <ScrollContainer>
                {isMobile ? null : 
                <div className="swipe-help">
                    <p>Swipe to change pages</p>
                </div>}
                {isMobile ?
                <div className="buttons-mountains">
                    <div style={styleDot()} className="dot"></div>
                    <p style={styleLink()} className="link-paragraph"><Link onClick={() => handleClick('page1')} activeClass="active" className="test1" to="p1" spy={true} smooth={true} duration={500} >What is mountain</Link></p>
                    <p style={styleLink()} className="link-paragraph"><Link onClick={() => handleClick('page2')} activeClass="active" className="test2" to="p2" spy={true} smooth={true} duration={500} >Highest mountain</Link></p>
                    <p style={styleLink()} className="link-paragraph"><Link onClick={() => handleClick('page3')} activeClass="active" className="test3" to="p3" spy={true} smooth={true} duration={500} >Mountains and humans</Link></p>
                </div> : null}
                <Swipe onSwipeDown={() => console.log('swipe down')} onSwipeUp={() => handleSwipe("p2")}>
                    <Element   className="mountains-element1" name="p1">
                        <ScrollPage page={0}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                                <section className="mountains-content">
                                    <h1>What is mountain</h1>
                                    <p>A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges.[1]
                                    Mountains are formed through tectonic forces, erosion, or volcanism,[1] which act on time scales of up to tens of millions of years.[2] Once mountain building ceases, mountains are slowly leveled through the action of weathering, through slumping and other forms of mass wasting, and through erosion by rivers and glaciers. </p>
                                </section>
                            </Animator>
                        </ScrollPage>
                    </Element>
                </Swipe>
                <Swipe onSwipeDown={() => handleSwipe("p1")} onSwipeUp={() => handleSwipe("p3")}>
                    <Element className="mountains-element2" name="p2">
                        <ScrollPage page={1}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                                <section className="mountains-content">
                                    <h1>Highest Mountain</h1>
                                    <p>The highest mountain on Earth is Mount Everest in the Himalayas of Asia, whose summit is 8,850 m (29,035 ft) above mean sea level. The highest known mountain on any planet in the Solar System is Olympus Mons on Mars at 21,171 m (69,459 ft). </p>
                                </section>
                            </Animator>
                        </ScrollPage>
                    </Element>
                </Swipe>
                <Swipe onSwipeDown={() => handleSwipe("p2")}>
                    <Element className="mountains-element3" name="p3">
                        <ScrollPage page={2}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                                <section style={{background: 'none'}} className="mountains-content">
                                    <h1>Mountains and humans</h1>
                                    <p>The highest known permanently tolerable altitude is at 5,950 metres (19,520 ft).[33] At very high altitudes, the decreasing atmospheric pressure means that less oxygen is available for breathing, and there is less protection against solar radiation (UV).[9] Above 8,000 metres (26,000 ft) elevation, there is not enough oxygen to support human life. This is known as the "death zone".[34] The summits of Mount Everest and K2 are in the death zone. </p>
                                </section>
                            </Animator>
                        </ScrollPage>
                    </Element>
                </Swipe>
            </ScrollContainer>
        </>
    )
}

export default Mountains