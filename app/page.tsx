import React from "react";
import { Card } from "@/components/ui/card";

const OverlappingCardsLayout = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-slate-50">
			<div className="max-w-5xl w-full relative">
				<div className="flex">
					{/* Left Card */}
					<Card className="w-[60%] h-[80vh] bg-white">
						<div className="p-6">
							<h2 className="text-2xl font-bold mb-4">Left Card</h2>
							<p>
								This card is 80% of the screen height and covers 60% of the
								available width.
							</p>
						</div>
					</Card>

					{/* Right Card */}
					<Card className="w-[40%] h-[72vh] bg-blue-100 absolute right-0 top-[6%] mr-5 z-10">
						<div className="p-6">
							<h2 className="text-2xl font-bold mb-4">Right Card</h2>
							<p>
								This card is now also 80% of the screen height, covers 40% of
								the available width, and overlaps the left card by 5%.
							</p>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default OverlappingCardsLayout;
