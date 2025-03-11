import LayoutSide from "./components/layout-side.tsx";
import BeTalentHunter from "./assets/beTalent-hunter.jpg";
import {useStore} from "zustand/react";
import {useFormStore} from "./stores/useFormStore.ts";
import {EnterpriseUserType, NaturalUserType} from "./stores/dataTypes.ts";
import Corporate from "./assets/userTypes/corporate.jpeg";
import PublicInstitution from "./assets/userTypes/public.jpeg";
import Education from "./assets/userTypes/education.jpeg";
import Agency from "./assets/userTypes/agency.jpeg";
import Foundations from "./assets/userTypes/foundations.jpeg";
import Hotel from "./assets/userTypes/hotel.jpeg";
import Other from "./assets/userTypes/other.jpeg";
import FatherSon from "./assets/userTypes/father-son.jpg";
import Begginer from "./assets/userTypes/begginer.jpg";
import Advanced from "./assets/userTypes/advanced.jpg";
import Dinner from "./assets/userTypes/dinner.jpg";
import Colab from "./assets/userTypes/colab.png";
import Button from "./components/button.tsx";
import {useViewStore} from "./stores/useViewStore.ts";

export default function UserType() {
    const {clientType, userType} = useStore(useFormStore);
    const {setCurrentView, goBack} = useStore(useViewStore);

    const enterpriseOptions: { name: EnterpriseUserType, img: string }[] = [{
        name: "Empresa privada (corporativa)",
        img: Corporate,
    }, {
        name: "Institución pública",
        img: PublicInstitution,
    }, {
        name: "Institución educativa o cultural",
        img: Education,
    }, {
        name: "Agencia de eventos",
        img: Agency,
    }, {
        name: "Fundaciones y ONG'S",
        img: Foundations,
    }, {
        name: "Restaurante, hotel  o espacio de hospitabilidad",
        img: Hotel,
    }, {
        name: "Otro",
        img: Other,
    }]

    const naturalOptions: { name: NaturalUserType, img: string }[] = [{
        name: "Padre/madre buscando educaciόn musical para sus hijos",
        img: FatherSon,
    }, {
        name: "Persona interesada en aprender  música o desarrollar habilidades artísticas",
        img: Begginer,
    }, {
        name: "Músico en búsqueda de formaciόn avanzada",
        img: Advanced,
    }, {
        name: "Organizador/a de un evento privado (como bodas o reuniones)",
        img: Dinner,
    }, {
        name: "Artista o creativo/a buscando colaboraciones",
        img: Colab,
    }, {
        name: "Otro",
        img: Other,
    }];

    return (
        <>
            <LayoutSide imgSrc={BeTalentHunter} title="Talent Hunter">
                <div className="my-6">
                    <div
                        className="outline outline-main bg-main-100 text-main rounded-full py-2 px-4 w-fit font-bold text-[10.7px] md:w-3/7 mb-[5px]">Seleccionaste: {clientType}</div>

                    <div className="text-[#4E535C] mb-6">
                        <p className="">2 de 4</p>
                        <p className="subtitle">Tipo de usuario</p>
                        <p>Necesitamos selecciones la opcion que más se parecen a lo que necesitas.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4">
                        {(clientType == "Empresa o instituciόn" ? enterpriseOptions : naturalOptions).map((option, index) => {
                            return (
                                <div key={index} className="space-y-2"
                                     onClick={() => useFormStore.setState({userType: option.name})}>
                                    <div
                                        className={"relative size-[180px] rounded-lg overflow-hidden " + (userType == option.name ? 'outline-2 outline-secondary-500' : null)}>
                                        <img src={option.img} className="size-full object-cover"/>
                                        {userType == option.name && (
                                            <div
                                                className="rounded-full outline-2 outline-secondary-400 size-4 absolute top-2 right-2 bg-secondary-400 inset-ring-2 inset-ring-white"/>
                                        )}
                                    </div>

                                    <span className="font-inter text-[#4E535C]">{option.name}</span>
                                    {option.name == "Otro" && (
                                        <input type="text" placeholder="Específicanos"
                                               className="w-full border border-[#b4bac5] rounded-xl p-[12px]"/>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    <div className="text-end space-x-2">
                        <Button variant="neutral" onClick={goBack}>Anterior</Button>
                        <Button variant="secondary" disabled={!userType}
                                onClick={() => setCurrentView("challenge")}>Siguiente</Button>
                    </div>
                </div>
            </LayoutSide>
        </>
    );
}
