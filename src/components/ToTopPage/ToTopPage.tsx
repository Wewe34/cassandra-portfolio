import React, { useState } from "react";

const ToTopPage = () => {

    const [isScrolling, setIsScrolling] = useState(false);
    window.onscroll = () => {
        if (window.pageYOffset < 300) {
            setIsScrolling(false);
        } else {
            return setIsScrolling(true);
        }
    }

    return (
        <div className={isScrolling ? "flex justify-end" : "hidden" } onClick={() => window.scrollTo(0,0)}>
            <div className="bg-blue-500 rounded-full w-14 h-14 fixed mx-6 z-10 self-end">
                <p className="text-4xl text-white pt-3">^</p>
            </div>
        </div>
    )
}

export default ToTopPage;