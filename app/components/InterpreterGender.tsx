import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const InterpreterGender = () => {
	return (
		<div>
			<label
				htmlFor="interpreterGender"
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				Interpreter Gender
			</label>
			<Select>
				<SelectTrigger id="interpreterGender" className="w-full">
					<SelectValue placeholder="Select interpreter gender" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="female">Female</SelectItem>
					<SelectItem value="male">Male</SelectItem>
					<SelectItem value="other">Other</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default InterpreterGender;
