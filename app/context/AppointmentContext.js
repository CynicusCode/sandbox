//app/context/AppointmentContext.js file is used to create a context for the appointment type, appointment details.

import React, { createContext, useState, useContext } from "react";

const AppointmentContext = createContext();

export const useAppointment = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
	const [appointmentType, setAppointmentType] = useState("");
	const [appointmentDetails, setAppointmentDetails] = useState({});
	const [interpreterGender, setInterpreterGender] = useState("");

	const value = {
		appointmentType,
		setAppointmentType,
		appointmentDetails,
		setAppointmentDetails,
		interpreterGender,
		setInterpreterGender,
	};

	return (
		<AppointmentContext.Provider value={value}>
			{children}
		</AppointmentContext.Provider>
	);
};
