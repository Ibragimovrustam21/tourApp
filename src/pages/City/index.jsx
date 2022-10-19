import Cards from "../../Components/CityPage/CityCard"
import './city.scss'

export const City = () => {
  return (
    <section>
      <div className="container">
        <div className="card__box">
          <h1 className="card__head">O’zbekiston viloyatlari</h1>
          <p className="card__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <ul className="card__list">
            <Cards />
          </ul>
        </div>
      </div>
    </section>
  )
}