import Navbar from "./navbar.tsx";
import ArrowTurnBack from "../assets/icons/arrow-turn-backward.svg";
import * as React from "react";
import bgRadialVector from "../assets/bg-radial-vector.svg";

export default function LayoutSide({children, imgSrc, title}: {
    children: React.ReactNode,
    imgSrc: string,
    title: string
}) {
    return (
        <>
            <div
                className="max-w-[1440px] mx-auto h-screen flex justify-around p-[32px] *:rounded-xl *:overflow-x-hidden">
                <div className="flex flex-col px-[32px] max-w-2/3 overflow-y-auto">
                    <Navbar backAtLeft={true}/>
                    <div className="my-auto">
                        {children}
                    </div>
                    <p className="text-disabled text-center">Todos los derechos reservados, 2024®</p>
                </div>

                <div className="w-1/3 max-w-[552px] relative">
                    <img src={imgSrc} alt="Cazatalentos" className="size-full object-cover"/>
                    <h2 className="text-white absolute right-0 bottom-0 flex flex-col
                         w-full pr-[24px] pb-[24px] bg-linear-to-t from-accent from-10% *:text-end">
                        <span>Perfil seleccionado</span>
                        <span className="font-montserrat font-extrabold text-[40px] ">{title}</span>
                        <span className="text-secondary-400 underline font-medium flex justify-end">
                            <img src={ArrowTurnBack} className="px-1.5"/>
                            Cambiar selección</span>
                    </h2>
                </div>
                <img src={bgRadialVector} className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"/>
            </div>
        </>
    );
}