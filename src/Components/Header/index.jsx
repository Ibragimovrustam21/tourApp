import { Link } from "react-router-dom";
import useLang from "../../Hook/useLang";
import content from "../../Localization/content";
import './header.scss';

// images
import Logo from "../../Assets/images/logo.png";
import search from "../../Assets/images/search.svg";
import { useLocation } from "react-router-dom";
import { Select } from 'antd';


export default function Header() {
    let classNames = require('classnames')
    const { Option } = Select;
    let loc = useLocation()

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

  const [lang, setLang] = useLang();

  // LANG
  const onChangeLang = (e) => {
    setLang(e.target.value);
  };

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

    window.addEventListener('scroll', function () {
        let head = document.querySelector('.header')
        head.classList.toggle('sticky', window.scrollY > 100)
    })
    
    return (
        <section>
            <div className="container">
                <header className="header">
                    <Link to='/' className="header__link--logo">
                        <img src={Logo} width={112} height={47} alt="logo" />
                    </Link>
                    <ul className="header__list">
                        {
                            menu.map((item, key) => {
                                let activeLink = classNames({
                                    header__item: true,
                                    active: loc.pathname === item.path
                                })
                                return (
                                    <li className={activeLink} key={key}>
                                        <Link to={item.path} className='header__item__link'>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="select__wrapper">
                        <Select className="header__select" size="large" defaultValue="Uzbek" style={{ width: 140 }} onChange={handleChange}>
                            <Option value="UZ">Uzbek</Option>
                            <Option value="RU">Russian</Option>
                            <Option value="ENG">English</Option>
                        </Select>
                        <div className="input__wrapper">
                            <Link className="header__search--input" to={'/filter'}>
                                <img className="header__search" src={search} width={24} height={24} alt="search" />
                                Qidiruv
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    )
}