import { Link } from "react-router-dom";
import './footer.scss'

// images
import Logo from "../../Assets/images/footer-logo.png";
import Img1 from "../../Assets/images/img1.svg";
import Img2 from "../../Assets/images/img2.svg";
import Img3 from "../../Assets/images/img3.svg";
import Img4 from "../../Assets/images/img4.svg";
import Img from "../../Assets/images/footer1.png";

export default function Footer(){
    return(
        <section className="section__footer">
            <div className="container">
                <footer className="footer">
                    <img className="footer__img" width={684}  src={Img} alt="" />
                    <div className="footer__left">
                        <Link to={'/'} className="header__link--logo"><img src={Logo} width={112} height={47} alt="logo" /></Link>
                        <div className="footer__wrapper">
                            <ul className="footer__list">
                                <li className="footer__item"><Link to={'/'}><a className="footer__item--link">Bosh sahifa</a></Link></li>
                                <li className="footer__item"><Link to={'/cities'}><a className="footer__item--link">Shaharlar</a></Link></li>
                                <li className="footer__item"><Link to={'/malumotlar'}><a className="footer__item--link">Muhim malumotlar</a></Link></li>
                                <li className="footer__item"><Link to={'/contact'}><a className="footer__item--link">Kontakt</a></Link></li>
                                <li className="footer__item"><Link to={'/about'}><a className="footer__item--link">Biz haqimizda</a></Link></li>
                            </ul>
                            <ul className="footer__list2">
                                <li className="footer__item"><Link to={'/'}><a className="footer__item--link">Lorem, ipsum.</a></Link></li>
                                <li className="footer__item"><Link to={'/'}><a className="footer__item--link">Lorem, ipsum.</a></Link></li>
                                <li className="footer__item"><Link to={'/'}><a className="footer__item--link">Lorem, ipsum.</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__foot">
                        <p className="foot__text">Illustration graphic art design format Public domain license</p>
                        <div className="foot__links">
                            <a className="footer__link" href="#"><img className="footer__img--link" src={Img1} width={18} height={18} alt=""/></a>
                            <a className="footer__link" href="#"><img className="footer__img--link" src={Img2} width={25} height={25} alt=""/></a>
                            <a className="footer__link" href="#"><img className="footer__img--link" src={Img3} width={25} height={25} alt=""/></a>
                            <a className="footer__link" href="#"><img className="footer__img--link" src={Img4} width={25} height={25} alt=""/></a>
                        </div>
                        <p className="foot__text texting">Illustration graphic art design format Public domain license</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}
