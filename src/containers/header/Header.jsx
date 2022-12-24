import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Lets Build Something amazing with gpt3 open aI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address"></input>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                </div>


            </div>

            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header