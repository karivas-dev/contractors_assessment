import Navbar from "./components/navbar.tsx";
import bgRadialVector from "./assets/bg-radial-vector.svg";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div
            className="max-w-[1440px] mx-auto p-[32px] h-screen grid place-content-between justify-center relative overflow-x-hidden">
            <Navbar backAtLeft={false}/>
            {children}
            <p className="text-accent text-center">Todos los derechos reservados, 2024®</p>
            <img src={bgRadialVector} className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"/>
        </div>
    );
}