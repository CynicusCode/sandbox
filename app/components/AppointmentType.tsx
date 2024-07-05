import React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const AppointmentType = () => {
	return (
		<div className="p-4">
			<label
				htmlFor="appointmentType"
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				Appointment Type
			</label>
			<Select>
				<SelectTrigger id="appointmentType" className="w-full">
					<SelectValue placeholder="Select appointment type" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Appointment Types</SelectLabel>
						<SelectItem value="Government">Government</SelectItem>
						<SelectItem value="Medical">Medical</SelectItem>
						<SelectItem value="Medical with Xrays">
							Medical with Xrays
						</SelectItem>
						<SelectItem value="Dental">Dental</SelectItem>
						<SelectItem value="Dental with Xrays">Dental with Xrays</SelectItem>
						<SelectItem value="Behavioral Health">Behavioral Health</SelectItem>
						<SelectItem value="School System">School System</SelectItem>
						<SelectItem value="Court Proceedings">Court Proceedings</SelectItem>
						<SelectItem value="Educational">Educational</SelectItem>
						<SelectItem value="Financial">Financial</SelectItem>
						<SelectItem value="Workshop">Workshop</SelectItem>
						<SelectItem value="Forensic Interview">
							Forensic Interview
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default AppointmentType;
