import {useViewStore} from "./stores/useViewStore.ts";
import {useStore} from "zustand/react";

function App() {
    const {getCurrentView} = useStore(useViewStore);
    const CurrentView = getCurrentView();

    return (
        <CurrentView/>
    )
}

export default App
