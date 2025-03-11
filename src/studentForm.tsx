import BeStudent from "./assets/beStudent.jpeg";
import LayoutSide from "./components/layout-side.tsx";
import Arrow from "./assets/icons/arrow.svg";
import UserStar from "./assets/icons/user-star-02.svg";
import Sparkles from "./assets/icons/sparkles.svg";
import {RegistrationOAuth} from "./components/registrationOAuth.tsx";
import InputText from "./components/inputs/inputText.tsx";
import Button from "./components/button.tsx";
import {useViewStore} from "./stores/useViewStore.ts";
import {useFormStore} from "./stores/useFormStore.ts";
import {useStore} from "zustand/react";

export default function StudentForm() {
    const {goBack} = useStore(useViewStore);
    const {user, setUser} = useStore(useFormStore);

    return (
        <>
            <LayoutSide imgSrc={BeStudent} title="Usuario Aprendiz">
                <div className="my-6">
                    <div className="bg-linear-65 from-[#f1eaff] to-[#f6f7f9] flex rounded-xl p-3 space-x-3">
                        <img src={UserStar} className="rounded-lg bg-main size-8 p-1.5"/>
                        <div className="text-main">
                            <p className="font-bold">Datos generales</p>
                            <p>Comparte tus datos de contacto</p>
                        </div>
                        <img src={Arrow} className="mx-4"/>
                        <img src={Sparkles} className="rounded-lg bg-white size-8 p-1.5"/>
                        <div className="text-disabled">
                            <p className="font-bold">Intereses</p>
                            <p>Nos gustaría mostrarte lo que te interesa</p>
                        </div>
                    </div>
                    <RegistrationOAuth/>
                    <p className="uppercase font-medium tracking-[1.5px]">Información general</p>
                    <p className="text-disabled">Compártenos un poco de ti</p>
                    <hr className="text-[#edeef1] my-2"/>
                    <form action="" className="grid grid-cols-2 space-x-3 space-y-2 *:space-y-1.5 mb-6">
                        <InputText label="Nombre completo" value={user.name} type="text"
                                   onUpdate={(name) => setUser({name})}/>
                        <InputText label="Correo electrónico" value={user.email} type="email"
                                   onUpdate={(email) => setUser({email})}/>
                        <div>
                            <InputText label="Contraseña" value={user.password} type="password"
                                       onUpdate={(password) => setUser({password})}/>
                            <span
                                className="italic text-disabled text-sm">Asegúrate de cumplir con 8 carácteres mínimo.</span>
                        </div>
                        <InputText label="Confirmación de contraseña" value={user.passwordConfirmation} type="password"
                                   onUpdate={(passwordConfirmation) => setUser({passwordConfirmation})}/>

                        <select
                            className="rounded-xl px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-0 focus:border-main">
                            <option className="">País de residencia</option>
                        </select>

                        <InputText label="Confirmación de contraseña" value={user.passwordConfirmation} type="date"
                                   onUpdate={(passwordConfirmation) => setUser({passwordConfirmation})}/>

                        <select
                            className="rounded-xl px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-0 focus:border-main">
                            <option className="">Género (opciona)</option>
                        </select>

                        <InputText label="Teléfono (opcional)" value={user.phone} type="telephone"
                                   onUpdate={(phone) => setUser({phone})}/>

                        <select
                            className="rounded-xl px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-0 focus:border-main">
                            <option className="">¿Cómo nos conociste?</option>
                        </select>

                        <div className="text-end col-span-2 space-x-2">
                            <Button variant="neutral" onClick={goBack}>Anterior</Button>
                            <Button variant="secondary" disabled={true}>Siguiente</Button>
                        </div>
                    </form>
                </div>
            </LayoutSide>
        </>
    )
}
