import React from "react";
import { Card } from "@/components/ui/card";
import AppointmentType from "./components/AppointmentType";
import AppointmentDetails from "./components/AppointmentDetails";
import InterpreterGender from "./components/InterpreterGender";
import CommunicationDashboard from "./components/CommunicationDashboard";

const WebformSandbox = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-slate-50">
			<div className="max-w-5xl w-full relative">
				<div className="flex">
					{/* Left Card */}
					<Card className="w-[60%] h-[80vh] bg-white ">
						<div className=" flex-col max-w-lg mt-16">
							<AppointmentType />
							<AppointmentDetails />
							<InterpreterGender />
						</div>
					</Card>

					{/* Right Card */}
					<Card className="w-[40%] h-[72vh] bg-blue-900 absolute right-0 top-[6%] mr-5 z-10">
						<CommunicationDashboard />
					</Card>
				</div>
			</div>
		</div>
	);
};

export default WebformSandbox;
