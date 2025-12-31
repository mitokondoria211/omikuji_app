import Omikuji from "./components/Omikuji";
import "./App.css";
import Title from "./components/Title";

const App = () => {
    return (
        <div>
            <Title />
            <main className="flex min-h-[calc(100dvh-96px)] items-center justify-center">
                <Omikuji />
            </main>
        </div>
    );
};

export default App;
