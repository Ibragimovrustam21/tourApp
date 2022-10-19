import { Link } from "react-router-dom";
import './footer.scss'

// images
import Logo from "../../Assets/images/footer-logo.png";
import Img1 from "../../Assets/images/img1.svg";
import Img2 from "../../Assets/images/img2.svg";
import Img3 from "../../Assets/images/img3.svg";
import Img from "../../Assets/images/footer1.png";

export default function Footer() {
    const menu = [
        {
            name: 'Bosh sahifa',
            path: '/'
        },
        {
            name: 'Shaharlar',
            path: '/cities'
        },
        {
            name: 'Muhim ma`lumotlar',
            path: '/data'
        },
        {
            name: 'Rejalashtirish',
            path: '/planning'
        },
        {
            name: 'Biz haqimizda',
            path: '/about'
        },
    ]
    return (
        <section className="section__footer">
            <div className="container">
                <footer className="footer">
                    <img className="footer__img" width={684} src={Img} alt="" />
                    <div className="footer__left">
                        <Link to={'/'} className="header__link--logo"><img src={Logo} width={112} height={47} alt="logo" /></Link>
                        <div className="footer__wrapper">
                            <ul className="footer__list">
                                {
                                    menu.map((item, key) => {
                                        return (
                                            <li className='footer__item' key={key}>
                                                <Link to={item.path} className='footer__item--link'>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className="footer__list2">
                                <li className="footer__item"><Link to={'/'} className="footer__item--link" >Bosh sahifa</Link></li>
                                <li className="footer__item"><Link to={'/'} className="footer__item--link" >Shaharlar</Link></li>
                                <li className="footer__item"><Link to={'/'} className="footer__item--link" >Biz haqimizda</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__foot">
                        <p className="foot__text">Illustration graphic art design format Public domain license</p>
                        <div className="foot__links">
                            <div className="foot__links--box">
                                <a href="https://www.facebook.com/">
                                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3922 0.169756V3.95707L10.1444 3.96293C8.38243 3.96293 8.04293 4.8 8.04293 6.02341V8.73366H12.24L11.6956 12.9717H8.04293V24H3.66498V12.9717H0V8.73366H3.66498V5.6078C3.66498 1.97853 5.87708 0 9.12 0C10.666 0 12 0.117073 12.3922 0.169756Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div className="foot__links--box">
                                <a href="https://www.instagram.com/">
                                    <svg width="24" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75ZM10 2C7.526 2 7.122 2.007 5.971 2.058C5.187 2.095 4.661 2.2 4.173 2.39C3.739 2.558 3.426 2.759 3.093 3.093C2.78001 3.3954 2.53935 3.76458 2.389 4.173C2.199 4.663 2.094 5.188 2.058 5.971C2.006 7.075 2 7.461 2 10C2 12.474 2.007 12.878 2.058 14.029C2.095 14.812 2.2 15.339 2.389 15.826C2.559 16.261 2.759 16.574 3.091 16.906C3.428 17.242 3.741 17.443 4.171 17.609C4.665 17.8 5.191 17.906 5.971 17.942C7.075 17.994 7.461 18 10 18C12.474 18 12.878 17.993 14.029 17.942C14.811 17.905 15.338 17.8 15.826 17.611C16.259 17.442 16.574 17.241 16.906 16.909C17.243 16.572 17.444 16.259 17.61 15.829C17.8 15.336 17.906 14.809 17.942 14.029C17.994 12.925 18 12.539 18 10C18 7.526 17.993 7.122 17.942 5.971C17.905 5.189 17.8 4.661 17.61 4.173C17.4593 3.765 17.2191 3.39596 16.907 3.093C16.6047 2.77985 16.2355 2.53917 15.827 2.389C15.337 2.199 14.811 2.094 14.029 2.058C12.925 2.006 12.539 2 10 2ZM10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div className="foot__links--box">
                                <a href="https://telegram.org/">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.65701 12.5342L8.64197 19.9965L12.5285 16.1099L19.1759 21.3938L23.9997 0.666992L-0.0472412 10.3177L5.65701 12.5342ZM3.78146 10.2966L15.2435 5.69647L6.12852 11.2086L3.78146 10.2966ZM17.2861 6.10486L9.67836 13.0647L8.76324 16.5133L7.07079 12.2823L17.2861 6.10486ZM10.248 16.4014L10.7091 14.6638L11.4203 15.2291L10.248 16.4014ZM18.3101 18.9092L11.3879 13.4069L21.8099 3.87229L18.3101 18.9092Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="foot__text texting">Illustration graphic art design format Public domain license</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}