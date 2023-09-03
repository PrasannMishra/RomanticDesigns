
import Carousel3d from "./Carousal3d";
import CarouselCard from "./CarousalCards";
import { isMobile } from 'react-device-detect';
const carousalHeight = isMobile ? "60vh" : "90vh"
const cards = [
    {
        key: 1,
        content: <CarouselCard title="Love is in the Air" image={"/images/3D1.jpg"} />,
    },
    {
        key: 2,
        content: <CarouselCard title="Love Forever" image={"/images/3D2.jpg"} />,
    },
    {
        key: 3,
        content: <CarouselCard title="Together ever" image={"/images/3D3.jpg"} />,
    },
    {
        key: 4,
        content: <CarouselCard title="Paradise" image={"/images/3D4.jpg"} />,
    },
    {
        key: 5,
        content: <CarouselCard title="Tu meri mai tera" image={"/images/3D5.jpg"} />,
    },
    {
        key: 6,
        content: <CarouselCard title="kuch kuch hota hai" image={"/images/3D6.jpg"} />,
    },
    {
        key: 7,
        content: <CarouselCard title="Radhe Radhe" image={"/images/3D7.jpg"} />,
    },
    {
        key: 8,
        content: <CarouselCard title="You are moon to my sky" image={"/images/3D8.jpg"} />,
    },
    {
        key: 9,
        content: <CarouselCard title="One in a million" image={"/images/3D9.jpg"} />,
    },
    {
        key: 10,
        content: <CarouselCard title="Live it !!" image={"/images/3D10.jpg"} />,
    },



];
function App() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                background:
                    "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(89, 76, 244, 0.48) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(76, 103, 244, 0.61) 0%, rgba(76, 103, 244, 0.02) 100%), rgb(21, 15, 44)",
            }}
        >
            <div style={{ width: 600, height: carousalHeight }}>
                <Carousel3d
                    cards={cards}
                    offset={2}
                />
            </div>
        </div>
    );
}

export default App;
