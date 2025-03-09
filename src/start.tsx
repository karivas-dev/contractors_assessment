import beMusician from './assets/beMusician.jpg';
import beTalentHunter from './assets/beTalent-hunter.jpg';
import beStudent from './assets/beStudent.jpeg';
import Layout from "./layout.tsx";
import {useViewStore} from "./stores/useViewStore.ts";
import LayoutSide from "./layout-side.tsx";


export default function Start() {
    const {setView} = useViewStore();

    return (
        <>
            <Layout>
                <div className="max-h-[800px] flex flex-col justify-center items-center space-y-[32px]">
                    <div className="max-w-[800px] mx-auto">
                        <h1 className="font-montserrat font-bold text-[40px] text-accent">¿Cuál es tu pasión?</h1>
                        <p className="text-disabled">Antes de iniciar a crear una cuenta, selecciona que tipo de usuario
                            eres para poder completar la información que te solicitamos.</p>
                    </div>

                    <div
                        className="grid grid-cols-3 gap-[16px] max-w-[956px] mx-auto *:rounded-xl *:overflow-hidden *:max-h-[414px] *:relative">
                        <div>
                            <img src={beMusician} alt="Músico" className="h-full object-cover w-auto"/>
                            <h2 className="font-montserrat font-extrabold text-[40px] text-[40px]/10 text-white absolute left-0 bottom-0 flex flex-col
                        bg-linear-to-t from-accent from-12% w-full pl-[24px] pb-[24px]">
                                <span className="">Ser</span>
                                <span>Músico</span>
                            </h2>
                        </div>

                        <div>
                            <img src={beStudent} alt="Estudiante"
                                 className="object-cover w-full max-h-full"/>
                            <h2 className="font-montserrat font-extrabold text-[40px] text-[40px]/10 text-white absolute left-0 bottom-0 flex flex-col
                        bg-linear-to-t from-accent from-12% w-full pl-[24px] pb-[24px]">
                                <span className="">Ser</span>
                                <span>Estudiante</span>
                            </h2>
                        </div>

                        <div onClick={() => setView(LayoutSide)}>
                            <img src={beTalentHunter} alt="Cazatalentos" className="h-full object-cover w-auto"/>
                            <h2 className="font-montserrat font-extrabold text-[40px] text-[40px]/10 text-white absolute left-0 bottom-0 flex flex-col
                        bg-linear-to-t from-accent from-12% w-full pl-[24px] pb-[24px]">
                                <span className="">Ser Talent</span>
                                <span>Hunter</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}