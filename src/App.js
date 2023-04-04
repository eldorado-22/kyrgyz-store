import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import Basket from "./pages/Basket";


// useSelector
// use Dispatch


function App() {

    const dispatch = useDispatch()


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
        </div>
    );
}

export default App;
