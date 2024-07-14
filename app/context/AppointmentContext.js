//app/context/AppointmentContext.js file is used to create a context for the appointment type, appointment details.

import React, { createContext, useState, useContext, useEffect } from "react";

const AppointmentContext = createContext();

export const useAppointment = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
	const [appointmentType, setAppointmentType] = useState("");
	const [appointmentDetails, setAppointmentDetails] = useState("");
	const [interpreterGender, setInterpreterGender] = useState("");
	const [keywords, setKeywords] = useState({});
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		const loadKeywords = async () => {
			try {
				const response = await fetch("/keywords.json");
				const data = await response.json();
				setKeywords(data);
			} catch (error) {
				console.error("Error loading keywords:", error);
			}
		};

		loadKeywords();
	}, []);

	const value = {
		appointmentType,
		setAppointmentType,
		appointmentDetails,
		setAppointmentDetails,
		interpreterGender,
		setInterpreterGender,
		keywords,
		alertMessage,
		setAlertMessage,
	};

	return (
		<AppointmentContext.Provider value={value}>
			{children}
		</AppointmentContext.Provider>
	);
};
