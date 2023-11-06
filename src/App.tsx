import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";


const App = () => {
    return <div>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    </div>;
};
export default App;
