import Omikuji from "./components/Omikuji";
import "./App.css";
import Title from "./components/Title";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Title />
            <main className="flex flex-1 items-center justify-center">
                <Omikuji />
            </main>
        </div>
    );
};

export default App;
