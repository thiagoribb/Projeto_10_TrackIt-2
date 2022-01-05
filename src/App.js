import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";


export default function App(){
    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/cadastro" element={<Cadastro/>}></Route>
				<Route path="/habitos" element={<Habitos/>}></Route>
				<Route path="/hoje" element={<Hoje/>}></Route>
				<Route path="/historico" element={<Historico/>}></Route>
			</Routes>
		</BrowserRouter> 
    );
}
