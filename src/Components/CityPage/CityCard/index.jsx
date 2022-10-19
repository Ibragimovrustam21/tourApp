import { Link } from "react-router-dom";
import city from "../../../Assets/cities/tashkent.png";
import "./сards.scss";


export default function Cards() {
    return (
        <>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, key) => {
                    return (
                        <li className="card__item">
                            <div className="card__item--content">
                                <img className="card__item--image" src={city} alt="" />
                                <h2 className="card__item--head">Toshkent viloyati</h2>
                                <p className="card__item--text">Lorem Ipsum is simply dummy text of the printing.</p>
                                <div className="item__box--wrapper">
                                    <div className="card__item--num">231 ta ziyoratgohlar</div>
                                </div>
                            </div>
                            <Link to={'/city-page'} className="card__item--link">
                                Batafsil
                                <svg width="20" height="14" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.589576 6.75017V9.25017L16.625 9.25017L12.5718 13.3033L14.3396 15.0711L21.4106 8.00002L14.3396 0.928955L12.5718 2.69672L16.6253 6.75017L0.589576 6.75017Z" fill="#fff" />
                                </svg>
                            </Link>
                        </li>
                    )
                })
            }
        </>
    )
}