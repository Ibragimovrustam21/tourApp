import "./AboutPage.scss";
import useLang from "../../Hook/useLang";
import content from "../../Localization/content";

// images
import Manager from "../../Assets/images/manager.png";
import Tel     from "../../Assets/imagess/tel.png";
import Gmail   from "../../Assets/imagess/gmail.png";
import Person1 from "../../Assets/images/person1.png";
import Person2 from "../../Assets/images/person2.png";
import Person3 from "../../Assets/images/person3.png";
import Person4 from "../../Assets/images/person4.png";
import Person6 from "../../Assets/images/person6.png";
import Person7 from "../../Assets/images/person7.png";
import Person8 from "../../Assets/images/person8.png";

const projectLeader = [
    {
        id:1,
        name:"Harvey Specter",
        title:"Loyiha rahbari",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        phone:"(99) 123-45-67",
        gmail:"info@gmail.com",
        image:Manager
    }
] 


const organizers = [
    {
        id:1,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person1
    },
    {
        id:2,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person2
    },
    {
        id:3,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person3
    },
    {
        id:4,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person4
    },
    {
        id:5,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person4
    },
    {
        id:6,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person6
    },
    {
        id:7,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person7
    },
    {
        id:8,
        name:"Abdurahmon Sadiyev",
        title:"Loyiha tashkilotchisi",
        img:Person8
    },
]

export default function AboutPage(){

  const [ lang ] = useLang();


    return(
        <section>
            {/* <div className="container">
                <div className="about">
                    <h1 className="about__head">{content[lang].home.title4}</h1>
                    <div className="about__box">
                        <ul className="about__box--list">
                            <li className="about__box--item"><a className="about__box--link green" href="#">Loyiha haqida</a></li>
                            <li className="about__box--item"><a className="about__box--link" href="#">Uning maqsadi</a></li>
                            <li className="about__box--item"><a className="about__box--link" href="#">Lorem ipsum</a></li>
                        </ul>
                        <p className="about__box--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="about__wrapper">
                            {
                                projectLeader?.map((i,e) => {
                                    return(
                                        <div key={e} className="about__wrap">
                                            <div className="about__wrap--left">
                                                <img src={i.image} width={400} height={400} alt="image" />
                                            </div>
                                            <div className="about__wrap--right">
                                                <h2 className="about__right--head">{i.name}</h2>
                                                <p className="about__right--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                                <div className="wrap__links">
                                                    <a className="wrap__link" href="tel:+991234567"><img src={Tel} width={40} alt="img" /> (99) 123-45-67</a>
                                                    <a className="wrap__link" href="mailto:mail@gmail.com"><img src={Gmail} width={40} alt="img" /> info@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                    </div>
                    <ul className="about__person--list">
                        {
                            organizers?.map((i,e) => {
                                return(
                                    <li className="about__person--item" key={e}>
                                        <img src={i.img} width={258} height={236} alt="person"/>
                                        <h2 className="about__person--head">{i.name}</h2>
                                        <p className="about__person--title">{i.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul> 
                </div>
            </div> */}
        </section>
    )
}
