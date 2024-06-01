import type React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoPhonePortrait, IoWatch } from "react-icons/io5";
import { PiGameControllerFill, PiHeadphonesFill } from "react-icons/pi";

interface Props {
	id: string;
	className: string;
}

const Icon: React.FC<Props> = ({ id, className }) => {
	switch (true) {
		case id.includes("watch"):
			return <IoWatch className={className} />;
		case id.includes("headphone"):
			return <PiHeadphonesFill className={className} />;
		case id.includes("phone"):
			return <IoPhonePortrait className={className} />;
		case id.includes("gaming"):
			return <PiGameControllerFill className={className} />;
		default:
			return <HiMiniComputerDesktop className={className} />;
	}
};

export default Icon;
