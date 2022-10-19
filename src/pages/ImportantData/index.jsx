import "./importantData.scss";

// images
import data from "../../Assets/images/data.png";
import calculator from "../../Assets/images/calculator.png";
import dollar from "../../Assets/images/dollar.png";
import dollar2 from "../../Assets/images/dollar2.png";
import user from "../../Assets/images/user.png";

export const ImportantData = () => {
    return (
        <section>
            <div className="container">
                <div className="information">
                    <h1 className="information__head">Muhim malumotlar</h1>
                    <p className="information__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className="information__list">
                        <div className="information__item">
                            <img className="information__item--img" src={data} width={140} height={140} alt="" />
                            <h2 className="information__item--head">Wi-fi zonalar</h2>
                            <p className="information__item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <a className="information__item--link" href="#">Batafsil</a>
                        </div>
                        <div className="information__item">
                            <img className="information__item--img" src={calculator} width={140} height={140} alt="" />
                            <h2 className="information__item--head">Sim kartalar</h2>
                            <p className="information__item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <a className="information__item--link" href="#">Batafsil</a>
                        </div>
                        <div className="information__item">
                            <img className="information__item--img" src={dollar} width={140} height={140} alt="" />
                            <h2 className="information__item--head">Valyuta ayriboshlash</h2>
                            <p className="information__item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <a className="information__item--link" href="#">Batafsil</a>
                        </div>
                        <div className="information__item">
                            <img className="information__item--img" src={dollar2} width={140} height={140} alt="" />
                            <h2 className="information__item--head">Naqt pul olish</h2>
                            <p className="information__item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <a className="information__item--link" href="#">Batafsil</a>
                        </div>
                        <div className="information__item">
                            <img className="information__item--img" src={user} width={140} height={140} alt="" />
                            <h2 className="information__item--head">Muhim kontaktlar</h2>
                            <p className="information__item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <a className="information__item--link" href="#">Batafsil</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}