import { React } from "react";
import { Typography, Box } from "@mui/material";
import  PageHeader  from "../components/PageHeader";
import NavBar  from "../components/NavBar";
import InfoBlock from "../components/InfoBlock";

function Services() {
	return <Box sx={{ flexGrow: 1 }}>
		<NavBar />
		<PageHeader title="Services" />
		<InfoBlock title="Lawn Mowing" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
	</Box>;
}

export default Services;
