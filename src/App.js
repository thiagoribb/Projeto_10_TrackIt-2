import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import Login from "./components/Login";

export default function App(){
    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/cadastro" element={<Cadastro/>}></Route>
				<Route path="/habitos" element={<Habitos/>}></Route>
			</Routes>
		</BrowserRouter> 
    );
}
