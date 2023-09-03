import React, { useState } from "react";
import Heart from "react-animated-heart";
import { useEffect } from "react";

export default function AnimatedHeart() {
    const [isClick, setClick] = useState(false);
    useEffect(() => {
        setTimeout(() => setClick(!isClick), 2000)
    }, [])
    return (
        <div>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
    );
}