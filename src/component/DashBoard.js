import React, { Suspense } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import { isMobile } from 'react-device-detect';
import ReactAudioPlayer from 'react-audio-player';
const Confetti = React.lazy(() => import('./Confetti'));
const FramerMotion = React.lazy(() => import('./FramerMotion'));
const Carousal3d = React.lazy(() => import('./3dCarousal/Carousal_3d'));
const AnimatedHeart = React.lazy(() => import('./AnimatedHeart'));
import NoMatch from "./NoMatch"

const images = [
    { url: "/images/C1.jpg" },
    { url: "/images/C2.jpg" },
    { url: "/images/C3.jpg" },
    { url: "/images/C4.jpg" },
];
const backGroundImageStyle = {
    backgroundImage: "url('/images/bg12.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
}
const flexStyle = { alignItems: "center", display: "flex", justifyContent: "center", gap: "10px" }

const Dashboard = () => {
    return (
        <Suspense fallback={<NoMatch />}>
            <div style={backGroundImageStyle}>
                <Confetti />
                <div >
                    <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
                        {images.map(img => <img loading={"lazy"} key={img.url} src={img.url} />)}
                    </Carousel >
                </div>
                <div style={flexStyle}>
                    <ReactAudioPlayer
                        src="/songs/Soniyo.mp3"
                        autoPlay={true}
                        loop={true}
                        controls
                        style={{ height: "20px", width: "100px" }}
                    />
                    <FramerMotion text={" Big Cheers to the 3 months of togetherness"} />
                </div>
                <div>
                    <ReactPlayer
                        url="https://youtu.be/ZGc0tAxizx4"
                        controls={true}
                        width="100%"
                        height={isMobile ? "30vh" : "80vh"}
                    />
                </div>
                <div style={flexStyle}>
                    <AnimatedHeart />
                    <FramerMotion text={"To the time we have laughed together !"} />
                    <AnimatedHeart />
                </div>
                <div>
                    <Carousal3d images={images} />
                </div>
            </div>
        </Suspense>
    );
}
export default Dashboard;