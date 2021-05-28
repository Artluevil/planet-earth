import React, { useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import MountEverest from '../images/mount-everest.jpg'
import Swipe from 'react-easy-swipe'
import { withRouter } from 'react-router';
import { useMediaQuery } from 'react-responsive'


function ReadMore(props) {

    const { data } = props

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
        backgroundColor: '#8a8a8a'
    }

    const link1 = {
        color: '#8a8a8a',
        cursor: 'pointer'
    }

    const link2 = {
        color: 'yellow',
        cursor: 'pointer'
    }

    const link3 = {
        color: '#8a8a8a',
        cursor: 'pointer'
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
                    <p style={styleLink()} className="link-paragraph"><Link onClick={() => handleClick('page1')} activeClass="active" className="test1" to="p1" spy={true} smooth={true} duration={500} >{data.section1.name}</Link></p>
                    <p style={styleLink()} className="link-paragraph"><Link onClick={() => handleClick('page2')} activeClass="active" className="test2" to="p2" spy={true} smooth={true} duration={500} >{data.section2.name}</Link></p>
                    <p style={styleLink()} className="link-paragraph"><Link onClick={() => handleClick('page3')} activeClass="active" className="test3" to="p3" spy={true} smooth={true} duration={500} >{data.section3.name}</Link></p>
                </div> : null}
                <Swipe onSwipeDown={() => console.log('swipe down')} onSwipeUp={() => handleSwipe("p2")}>
                    <Element className={data.styling.element1} name="p1">
                        <ScrollPage page={0}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500), MoveIn(0, 500))}>
                                <section className={data.styling.content}>
                                    <h1>{data.section1.name}</h1>
                                    <p>{data.section1.dsc}</p>
                                </section>
                            </Animator>
                        </ScrollPage>
                    </Element>
                </Swipe>
                <Swipe onSwipeDown={() => handleSwipe("p1")} onSwipeUp={() => handleSwipe("p3")}>
                    <Element className={data.styling.element2} name="p2">
                        <ScrollPage page={1}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500),  MoveIn(0, 500))}>
                                <section className={data.styling.content}>
                                    <h1>{data.section2.name}</h1>
                                    <p>{data.section2.dsc}</p>
                                </section>
                            </Animator>
                        </ScrollPage>
                    </Element>
                </Swipe>
                <Swipe onSwipeDown={() => handleSwipe("p2")}>
                    <Element className={data.styling.element3} name="p3">
                        <ScrollPage page={2}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500), MoveIn(0, 500))}>
                                <section style={{background: 'none'}} className={data.styling.content}>
                                    <h1>{data.section3.name}</h1>
                                    <p>{data.section3.dsc}</p>
                                </section>
                            </Animator>
                        </ScrollPage>
                    </Element>
                </Swipe>
            </ScrollContainer>
        </>
    )
}

export default ReadMore