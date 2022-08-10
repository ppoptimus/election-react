import React from 'react'
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from "axios";

import Employee from './online-component/employee'
import Employer from './online-component/employer'
import Error from './online-component/error'

function App() {
	const [employee, setEmployee] = useState(true)
	const [employer, setEmployer] = useState(true)

	const search = useLocation().search
	const param = new URLSearchParams(search).get('param')
	useEffect(() => {
		checkToken();
	}, [])

	const checkToken = async () => {
		let headersList = {
			"Accept": "*/*",
			"Content-Type": "application/json" 
		  }

		  let reqOptions = {
			url: `${param}`,
			method: "GET",
			headers: headersList,
		 }
		 
		 let response = await axios.request(reqOptions);
		 console.log(response.data);
	}

	return (
		<div>
			<Routes>
				<Route path='employee' element={employee ? <Employee /> : <Error/>} />
				<Route path='employer' element={employer ? <Employer /> : <Error/>} />
			</Routes>
		</div>
	)
}

export default App
