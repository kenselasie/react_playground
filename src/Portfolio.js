import React from 'react'
import './Portfolio.css'
import Profilepic from './assets/melodyunplash.jpg'
function Portfolio() {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <h2>Ken's Portfolio</h2>
                </div>
                <div>
                    {/* ordered list and unordered list */}

                    <ul type="none" className="lists">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <main className="container">
                <section className="main-section"> 
                    <div className="desc">
                        <h1>KENNEDY SELASIE</h1>
                        <p>My name is Ken, and i am a web developer, i do everything ranging from web tec
                            hnology to app development blah blah blah blah blah
                        </p>
                    </div>
                </section>
                <section>
                    <h1 className="text-center mt">ABOUT ME</h1>
                    <section className="about-section">
                        <div className="about-pic">
                            <img src={Profilepic} alt="profilepic"></img>
                        </div>
                        <div className="about-text">
                            this is my personal ps and i am a good person im just writing anything
                            at all just to fill this gap in the soces give to ne so that k am revlevant this
                            soomm.$on('event', callback)
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Portfolio
