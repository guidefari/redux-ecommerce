import {
	Computer,
	Headphones,
	Phone,
	SportsEsports,
	Watch,
} from "@mui/icons-material";
import type React from "react";

interface Props {
	id: string;
}

const Icon: React.FC<Props> = ({ id }) => {
	switch (true) {
		case id.includes("watch"):
			return <Watch />;
		case id.includes("phone"):
			return <Phone />;
		case id.includes("headphone"):
			return <Headphones />;
		case id.includes("gaming"):
			return <SportsEsports />;
		default:
			return <Computer />;
	}
};

export default Icon;
