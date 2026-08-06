import "./App.css";
import MainProvider from "./components/MainProvider";
import Layout from "./components/Layout";

function App() {
    return (
        <MainProvider>
            <Layout />
        </MainProvider>
    );
}

export default App;