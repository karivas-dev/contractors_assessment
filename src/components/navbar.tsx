import logo from "../assets/altempo_logo.svg";
import arrowLeft from "../assets/icons/arrow-left-02.svg";
import world from "../assets/icons/world.svg";
import * as React from "react";
import {useViewStore} from "../stores/useViewStore.ts";

export default function Navbar({backAtLeft = false, backView}: { backAtLeft?: boolean, backView?: React.FC }) {
    const {setView} = useViewStore();

    return (
        <nav className="flex justify-between items-center max-w-[800px] w-full mx-auto py-[16px]">
            <img src={logo} alt="Altempo logo" width="113px"/>

            <div className={(backAtLeft ? 'order-first' : 'ml-auto mr-[16px]') + ' cursor-pointer'}
                 onClick={() => backView && setView(backView)}>
                <img src={arrowLeft} alt="Flecha hacia izquierda" className="inline-block"/>
                <span className="ml-[16px] align-middle">Regresar</span>
            </div>
            

            <div className="text-accent">
                <img src={world} alt="Icono de mundo" className="inline-block"/>
                <span className="ml-[16px] align-middle">ESP</span>
            </div>
        </nav>
    );
}