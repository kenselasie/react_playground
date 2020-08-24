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
                        <li><a href="http://www.google.com">Home</a></li>
                        <li><a href="http://www.google.com">About</a></li>
                        <li><a href="http://www.google.com">Gallery</a></li>
                        <li><a href="http://www.google.com">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <main className="container">
                <section className="main-section"> 
                    <div className="desc">
                        <h1>KENNEDY SELASIE</h1>
                        <p>My name is Ken, and i am a web developer, i do everything ranging from web technology to app development, im here at your service any time you need me
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
                            soomm.$on some lorem ipsum
                        </div>
                    </section>
                </section>
                {/* <section className="contact-section">
                    <h1 className="text-center mt">CONTACT</h1>

                    <div className="contact-me">
                        <h3>Contact Me</h3>
                        <p>this is something small that im using to catch the at  using to catch the at  using to catch the at   using to catch the at  using to catch the at using to catch the at using to catch the at using to catch the at using to catch the attention of those how and thsi is just any text</p>
                    </div>
                    <form className="contact-form">
                        <div>
                            <input className="input-tag" type="text" placeholder="Enter Name"/>
                        </div>
                        <div>
                            <input className="input-tag" type="email" placeholder="Enter Email"/>
                        </div>
                        <div>
                            <textarea></textarea>
                        </div>
                    </form>
                </section> */}
            </main>
        </div>
    )
}

export default Portfolio
