import Layout from "./components/layout.tsx";
import TypePerson from "./assets/type-person.jpg";
import TypeCompany from "./assets/type-company.jpg";
import {useFormStore} from "./stores/useFormStore.ts";
import {useViewStore} from "./stores/useViewStore.ts";

export default function ClientSelector() {
    const {setCurrentView} = useViewStore.getState();

    return (
        <>
            <Layout>
                <div className="max-h-[800px] min-[800px]:min-w-[800px] max-w-[800px] space-y-6 my-6">
                    <div className="flex flex-col text-disabled">
                        <p className="">1 de 5</p>
                        <p className="subtitle">Selecciona el tipo de cliente que eres</p>
                        <p>Para brindarte servicios idoneos para ti</p>
                    </div>

                    <div className="flex justify-center gap-4 *:max-w-[261px]">
                        <div onClick={() => {
                            useFormStore.setState({clientType: 'Persona natural'});
                            setCurrentView("userType")
                        }}>
                            <img src={TypePerson} alt=""
                                 className="h-[434px] object-cover w-auto rounded-xl"/>
                            <p>Persona natural</p>
                        </div>
                        <div onClick={() => {
                            useFormStore.setState({clientType: 'Empresa o instituciόn'});
                            setCurrentView("userType")
                        }}>
                            <img src={TypeCompany} alt=""
                                 className="h-[434px] object-cover w-auto rounded-xl"/>
                            <p>Empresa o instituciόn</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}