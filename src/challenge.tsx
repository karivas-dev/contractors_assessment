import LayoutSide from "./components/layout-side.tsx";
import BeTalentHunter from "./assets/beTalent-hunter.jpg";
import {ChallengeEnterpriseOptions, ChallengeNaturalOptions} from "./stores/dataTypes.ts";
import {useStore} from "zustand/react";
import {useFormStore} from "./stores/useFormStore.ts";
import Button from "./components/button.tsx";
import {useViewStore} from "./stores/useViewStore.ts";
import InputCheckbox from "./components/inputs/inputCheckbox.tsx";

export default function Challenge() {

    const {clientType, challenge} = useStore(useFormStore);
    const {goBack} = useStore(useViewStore);

    return (
        <>
            <LayoutSide imgSrc={BeTalentHunter} title="Talent Hunter">
                <div className="my-6 space-y-6 w-fit md:w-10/12 mx-auto">
                    <h2 className="subtitle">Dificultad con la que te encuentras actualmente</h2>
                    <p className="font-bold font-montserrat text-accent">Selecciona las opciones que apliquen para tu
                        búsqueda
                        actual</p>
                    <form onSubmit={goBack}>
                        <div className="space-y-[8px] max-w-2xl">
                            {Object.values(clientType == "Empresa o instituciόn" ? ChallengeEnterpriseOptions : ChallengeNaturalOptions).map((challengue, index) => (
                                <div key={index}
                                     className="">
                                    <InputCheckbox value={challengue} id={`challengue-${index}`} name="challengue"
                                                   checked={false}>
                                        {challengue}
                                    </InputCheckbox>
                                </div>
                            ))}
                        </div>

                        <input placeholder="Comparte tu dificultad" id="challengue" name="challengue"
                               className="w-full resize-none border border-[#b4bac5] rounded-xl p-[12px] mt-6  "/>
                        <span className="text-[#4E535C] italic text-sm">500 carácteres max.</span>

                        <div className="text-end space-x-2">
                            <Button variant="neutral" onClick={goBack}>Anterior</Button>
                            <Button variant="secondary" disabled={!challenge}>Siguiente</Button>
                        </div>
                    </form>
                </div>
            </LayoutSide>
        </>
    );
}