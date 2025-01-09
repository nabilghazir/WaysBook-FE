import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Background: React.FC<Props> = ({ children }) => {
    return (
        <div className="relative w-full h-screen bg-white">
            <div className="absolute bg-[url('../../public/background-1.png')] w-96 h-full top-0 left-0 opacity-30"></div>
            <div className="absolute bg-[url('../../public/background-2.png')] w-96 h-3/5 top-0 right-0 opacity-30"></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};
