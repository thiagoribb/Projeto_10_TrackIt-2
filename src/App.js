import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";
import React, { useState, useContext } from "react";
import UserContext from "./contexts/UserContext";


export default function App(){

	const [token, setToken] = useState([]);

    return (
		<UserContext.Provider value={{ token, setToken }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/cadastro" element={<Cadastro/>}></Route>
					<Route path="/habitos" element={<Habitos/>}></Route>
					<Route path="/hoje" element={<Hoje/>}></Route>
					<Route path="/historico" element={<Historico/>}></Route>
				</Routes>
			</BrowserRouter> 
		</UserContext.Provider>
    );
}
