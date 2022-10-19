import { Link } from "react-router-dom";
import "./SinglePage3.scss";
import { Single3Slider } from "../../Components/Carousels/Single3Carousel/Single3";

// images
import Images from "../../Assets/images/singlePage.png";
import Images1 from "../../Assets/images/image1.png";
import Images2 from "../../Assets/images/image2.png";
import Images3 from "../../Assets/images/image3.png";
import Images4 from "../../Assets/images/image4.png";
import Time from "../../Assets/images/time.png";


export default function SinglePageLast() {
    return(
        <section>
        <div className="container">
            <ul class="breadcrumb">
                <li><Link to='/'>Bosh sahifa</Link></li>
                <li>Mehmonxona</li>
            </ul>
            <div className="single">
                <div className="single__left2">
                    <h2 className="single__left--head">Qo’shimcha malumotlar</h2>
                    <ul className="single__left--list">
                        <li className="single__left--item">
                            <img className="single__left--img2" src={Images1} width={50} height={50} alt="" />
                            <p className="single__left--title2"><b>Manzil:</b> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li className="single__left--item">
                            <img className="single__left--img2" src={Images2} width={50} height={50} alt="" />
                            <p className="single__left--title2"><b>Telfon:</b> +998 90 123- 45-67</p>
                        </li>
                        <li className="single__left--item">
                            <img className="single__left--img2" src={Images3} width={50} height={50} alt="" />
                            <p className="single__left--title2"><b>Narx:</b> 100.000 - 500.000 so’m gacha</p>
                        </li>
                        <li className="single__left--item">
                            <img className="single__left--img2" src={Images4} width={50} height={50} alt="" />
                            <p className="single__left--title2"><b>Ish vaqtlari:</b> 9:00 - 22:00 gacha</p>
                        </li>
                    </ul>
                </div>
                <div className="single__right">
                    <h1 className="single__right--head">Hilton Mehmonxonasi</h1>
                    <p className="single__right--text">Визуализированные агрегации кликов не требуют больших усилий и временных затрат времени, но лучше отказаться от них в пользу реальных исследований.</p>
                    <time className="single__right--time" datatype="9:41  |  17 December"><img src={Time} width={25} height={25} alt="time-img" /> 9:41  |  17 December</time>
                    <img className="single__right--img" src={Images} width={741} height={387} alt="" />
                    <p className="single__right--text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h2 className="single__right--title">Clicks don’t mean anything</h2>
                    <div className="single__right--div">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</div>
                    <p className="single__right--text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                    <hr className="single__right--hr" />
                </div>
            </div>
            <Single3Slider/>
        </div>
    </section>
    )
}