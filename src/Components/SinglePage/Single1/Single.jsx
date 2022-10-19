import "./Single.scss";

// images
import Images1 from "../../../Assets/images/img1.png";
import Images2 from "../../../Assets/images/img2.png";
import Images3 from "../../../Assets/images/img3.png";
import Images4 from "../../../Assets/images/img4.png";
import Time from "../../../Assets/images/time.png";
import Registan from "../../../Assets/images/registan.png";
import { Link } from "react-router-dom";

export default function Single1() {
    return (
        <section>
            <div className="container">
                <ul class="breadcrumb">
                    <li><Link to='/'>Bosh sahifa</Link></li>
                    <li><Link to='/cities'>Ziyoratgoh</Link></li>
                    <li>Registon</li>
                </ul>
                <div className="single">
                    <div className="single__left">
                        <h2 className="single__left--head">Qulayliklar</h2>
                        <ul className="single__left--list">
                            <li className="single__left--item">
                                <img className="single__left--img" src={Images1} width={50} height={50} alt="" />
                                <p className="single__left--title"><b>Restoran:</b> Rarafshon, Shox, Rayhon, Shahrisabz</p>
                            </li>
                            <li className="single__left--item">
                                <img className="single__left--img" src={Images2} width={50} height={50} alt="" />
                                <p className="single__left--title"><b>Hotel:</b> Asia, Grand, Estel</p>
                            </li>
                            <li className="single__left--item">
                                <img className="single__left--img" src={Images3} width={50} height={50} alt="" />
                                <p className="single__left--title"><b>Bank:</b> Infin Bank, Hamkorbank</p>
                            </li>
                            <li className="single__left--item">
                                <img className="single__left--img" src={Images4} width={50} height={50} alt="" />
                                <p className="single__left--title"><b>Dorixona:</b> Dorixona 111, ArzonApteka, Apteka 555</p>
                            </li>
                        </ul>
                        {/* <div className="single__left--content">
                            <h2 className="left__content--title">Bo’lishing</h2>
                            <div className="left__content--images">
                                <a className="left__content--img" href="#"><img src={Facebook} width={60} height={60} alt="Facebook" /></a>
                                <a className="left__content--img" href="#"><img src={Instagram} width={60} height={60} alt="Instagram" /></a>
                                <a className="left__content--img" href="#"><img src={Telegram} width={60} height={60} alt="Telegram" /></a>
                            </div>
                        </div> */}
                    </div>
                    <div className="single__right">
                        <h1 className="single__right--head">Registon Maydoni va uning tarixi</h1>
                        <p className="single__right--text">Визуализированные агрегации кликов не требуют больших усилий и временных затрат времени, но лучше отказаться от них в пользу реальных исследований.</p>
                        <time className="single__right--time" datatype="9:41  |  17 December"><img src={Time} width={25} height={25} alt="time-img" /> 9:41  |  17 December</time>
                        <img className="single__right--img" src={Registan} width={741} height={387} alt="registan" />
                        <p className="single__right--text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h2 className="single__right--title">Clicks don’t mean anything</h2>
                        <div className="single__right--div">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</div>
                        <p className="single__right--text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                        <hr className="single__right--hr" />
                    </div>
                </div>
            </div>
        </section>
    )
}