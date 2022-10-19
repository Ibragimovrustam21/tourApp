import Single1 from "../../Components/SinglePage/Single1/Single";
import { GaleryCarousel } from "../../Components/Carousels/GaleryCarousel";
import { MainCarousel_one } from "../../Components/Carousels/MainCarousel_one";

export const Single = () => {
    return (
        <>
            <Single1 />
            <GaleryCarousel title={'Media kontent'} />
            
            <MainCarousel_one title={'O’xshash ziyoratgohlar'} />
        </>
    )
}