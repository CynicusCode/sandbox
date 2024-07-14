//app/components/CommunicationDashboard.tsx
import React from "react";
import { useAppointment } from "../context/AppointmentContext";

const CommunicationDashboard = () => {
	const { alertMessage } = useAppointment();

	return (
		<div>
			<h2>Communication Dashboard</h2>
			{alertMessage && <div className="alert-message">{alertMessage}</div>}
		</div>
	);
};

export default CommunicationDashboard;
