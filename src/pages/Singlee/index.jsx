import Single1 from "../../Components/SinglePage/Single1/Single";
import { GaleryCarousel } from "../../Components/Carousels/GaleryCarousel";
import { MainCarouselOne } from "../../Components/Carousels/MainCarousel_one";

export const Single = () => {
    return (
        <>
            <Single1 />
            <GaleryCarousel title={'Media kontent'} />
            <MainCarouselOne title={'O’xshash ziyoratgohlar'} />
        </>
    )
}