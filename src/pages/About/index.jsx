import React, { useState } from "react";
import "./about.scss";

// images
import Tel from "../../Assets/images/tel.png";
import Gmail from "../../Assets/images/gmail.png";

import Manager from "../../Assets/persons/manager.png";
import Person1 from "../../Assets/persons/person1.png";
import Person2 from "../../Assets/persons/person2.png";
import Person3 from "../../Assets/persons/person3.png";
import Person4 from "../../Assets/persons/person4.png";
import Person6 from "../../Assets/persons/person6.png";
import Person7 from "../../Assets/persons/person7.png";
import Person8 from "../../Assets/persons/person8.png";

const projectLeader = [
    {
        id: 1,
        name: "Harvey Specter",
        title: "Loyiha rahbari",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        phone: "(99) 123-45-67",
        gmail: "info@gmail.com",
        image: Manager
    }
]

const organizers = [
    {
        id: 1,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person1
    },
    {
        id: 2,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person2
    },
    {
        id: 3,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person3
    },
    {
        id: 4,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person4
    },
    {
        id: 5,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person4
    },
    {
        id: 6,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person6
    },
    {
        id: 7,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person7
    },
    {
        id: 8,
        name: "Abdurahmon Sadiyev",
        title: "Loyiha tashkilotchisi",
        img: Person8
    },
]

export const About = () => {
    const [activeBtn, setActiveVBtn] = useState('firstBtn')
    let classNames = require('classnames')
    let activeFirst = classNames({
        "about__btn": true,
        "active-btn": activeBtn
    })
    let activeSecond = classNames({
        "about__btn": true,
        "active-btn": !activeBtn
    })
    
    return (
        <section>
            <div className="container">
                <div className="about">
                    <h1 className="about__head">Loyiha haqida</h1>
                    <div className="about__box">
                        <div className="about__btn--group">
                            <button className={activeFirst} onClick={() => { setActiveVBtn(true) }} >Loyiha haqida</button>
                            <button className={activeSecond} onClick={() => { setActiveVBtn(false) }}>Loyiha maqsadi</button>
                        </div>
                        {
                            activeBtn
                                ? <p className="about__box--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                : <p className="about__box--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        }
                    </div>
                    <div className="about__wrapper">
                        {
                            projectLeader?.map((i, e) => {
                                return (
                                    <div key={e} className="about__wrap">
                                        <div className="about__wrap--left">
                                            <img src={i.image} width={400} height={400} alt="" />
                                        </div>
                                        <div className="about__wrap--right">
                                            <h2 className="about__right--head">{i.name}</h2>
                                            <p className="about__right--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                            <div className="wrap__links">
                                                <a className="wrap__link" href="tel:(99) 123-45-67"><img src={Tel} width={40} alt="" /> (99) 123-45-67</a>
                                                <a className="wrap__link" href="tel:(99) 123-45-67"><img src={Gmail} width={40} alt="" /> info@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ul className="about__person--list">
                        {
                            organizers?.map((i, e) => {
                                return (
                                    <li className="about__person--item--block" key={e}>
                                        <div className="about__person--item">
                                            <img src={i.img} width={258} height={236} alt="person" />
                                            <h2 className="about__person--head">{i.name}</h2>
                                            <p className="about__person--title">{i.title}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}