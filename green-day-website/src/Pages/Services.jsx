import { React } from "react";
import { Typography, Box } from "@mui/material";
import  PageHeader  from "../components/PageHeader";
import NavBar  from "../components/NavBar";
import InfoBlock from "../components/InfoBlock";

function Services() {
	return (<Box sx={{ flexGrow: 1 }}>
		<NavBar />
		<PageHeader title="Services" />
		<InfoBlock title="Core Aeration and Seeding" content="Aeration can provide the necessary boost to a marginal lawn and a rejuvenation to others. As nature breaks up the cores, the soil will filter into the turf and support the microbial decomposition of the undisturbed thatch. Air and water entering the coring holes will also enhance the decomposition of the thatch while promoting deeper root growth." />
		<Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
		<InfoBlock title="Turf Disease Control" content="The most common and damaging turf disease in our area is Brown Patch. The disease starts as water-soaked lesions on the leaf blade or sheath, quickly fading to tan. Severely affected patches of grass appear yellow and sunken, giving the turf a pockmarked look. High activity levels of Brown Patch are associated with periods of warm-to-hot muggy nights with light showers which occur after a period of drought. Fungicide treatments are available as needed." />
		<Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
		<InfoBlock title="Lawn Renovations" content="When it is best to start over from scratch, a lawn renovation is recommended. We begin in late August – killing all undesired weeds and wild Bermuda. Two weeks later we return for a second spray to achieve a thorough kill. Once we are satisfied that we have eliminated all that we can, it’s time to core aerate, double-seed with sod-quality fescue, and apply starter fertilizer. All that is left to do is keep it watered." />
		<Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
		<InfoBlock title="Pest Control" content="Any lawn can have a wide variety of insect populations at any given time. Some insects, like white grubs or chinchbugs, can cause damage to yards. Others, such as fleas, ticks, and fire ants are bothersome to pets and people. Insects can live above the soil level in the plants or thatch layer or below the soil level in the roots. Insects can also attract other pests, such as moles. Contact us today, we can build a custom program to address your lawn care needs." />
		<Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
		<InfoBlock title="Soil Testing" content="Soil testing is beneficial for the measurement of nutrients in the lawn, the pH of the soil, and the combination or ratio of phosphorus, potassium, and nitrogen. The pH should be determined as some grass types grow better in acidic soil whilst others require a less acidic environment." />
	</Box>);
}

export default Services;
