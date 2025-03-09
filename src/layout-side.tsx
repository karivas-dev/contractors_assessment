import beTalentHunter from './assets/beTalent-hunter.jpg';
import Navbar from "./components/navbar.tsx";
import ArrowTurnBack from "./assets/icons/arrow-turn-backward.svg";
import Start from "./start.tsx";

export default function LayoutSide() {
    return (
        <>
            <div
                className="max-w-[1440px] mx-auto h-screen flex p-[32px] *:rounded-xl *:overflow-hidden
               ">
                <div className="px-[32px] grow">
                    <Navbar backAtLeft={true} backView={Start}/>


                </div>

                <div className="max-w-[552px] relative">
                    <img src={beTalentHunter} alt="Cazatalentos" className="h-full object-cover w-auto "/>
                    <h2 className="text-white absolute right-0 bottom-0 flex flex-col
                         w-full pr-[24px] pb-[24px] bg-linear-to-t from-accent from-10%">
                        <span>Perfil seleccionado</span>
                        <span className="font-montserrat font-extrabold text-[40px]">Talent Hunter</span>
                        <span className="text-secondary-400 underline font-medium flex ">
                            <img src={ArrowTurnBack}/>
                            Cambiar selección</span>
                    </h2>
                </div>
            </div>
        </>
    );
}