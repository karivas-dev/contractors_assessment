import {useViewStore} from "./stores/useViewStore.ts";

function App() {
    const {CurrentView} = useViewStore();

    return (
        <CurrentView/>
    )
}

export default App
