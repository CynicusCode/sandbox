import React from "react";
import { Input } from "@/components/ui/input";

const AppointmentDetails = () => {
	return (
		<div>
			<label
				htmlFor="appointmentDetails"
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				Appointment Details
			</label>
			<Input
				id="appointmentDetails"
				placeholder="Enter appointment details"
				className="w-full"
			/>
		</div>
	);
};

export default AppointmentDetails;
