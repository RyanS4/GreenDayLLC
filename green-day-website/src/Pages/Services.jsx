import { React } from "react";
import { Typography, Box, Card } from "@mui/material";
import  PageHeader  from "../components/PageHeader";
import NavBar  from "../components/NavBar";
import InfoBlock from "../components/InfoBlock";
import backflow from '../assets/backflow.png';
import corearation from '../assets/coreaeration.jpg';

function Services() {
	return (
		        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <PageHeader title="Services" />
            <Typography sx={{ padding: 2, fontSize: '25px' }} align="center">We offer a few additional services which complement our lawn care programs</Typography>
            <hr />
            <Box sx={{display: 'flex', width: '100%',}}>
                <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B' }}>
                            Core Aeration and Seeding (Late February – March)
                        </Typography>
                        <Typography variant="body1" component="div">
                            Aeration can provide the necessary boost to a marginal lawn and a rejuvenation to others. As nature breaks up the cores, the soil will filter into the turf and support the microbial decomposition of the undisturbed thatch. Air and water entering the coring holes will also enhance the decomposition of the thatch while promoting deeper root growth.
                        </Typography>
                        <img src={corearation} alt="Core Aeration and Seeding" style={{ width: '50%', marginTop: '15px', borderRadius: '5px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                    </Card>
                </Box>
                <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B' }}>
                           Turf Disease Control
                        </Typography>
                        <Typography variant="body1" component="div">
                           The most common and damaging turf disease in our area is Brown Patch. The disease starts as water-soaked lesions on the leaf blade or sheath, quickly fading to tan. Severely affected patches of grass appear yellow and sunken, giving the turf a pockmarked look. High activity levels of Brown Patch are associated with periods of warm-to-hot muggy nights with light showers which occur after a period of drought. Fungicide treatments are available as needed.
                        </Typography>
                    </Card>
                </Box>
            </Box>
                <Box sx={{ display: 'flex', width: '100%',}}>
                    <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                         <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B' }}>
                           Lawn Renovations
                        </Typography>
                        <Typography variant="body1" component="div">
                           When it is best to start over from scratch, a lawn renovation is recommended. We begin in late August – killing all undesired weeds and wild Bermuda. Two weeks later we return for a second spray to achieve a thorough kill. Once we are satisfied that we have eliminated all that we can, it’s time to core aerate, double-seed with sod-quality fescue, and apply starter fertilizer. All that is left to do is keep it watered.
                        </Typography>
                    </Card>
                    </Box>
                    <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B' }}>
							Pest Control
                        </Typography>
                        <Typography variant="body1" component="div">
                           Any lawn can have a wide variety of insect populations at any given time. Some insects, like white grubs or chinchbugs, can cause damage to yards. Others, such as fleas, ticks, and fire ants are bothersome to pets and people. Insects can live above the soil level in the plants or thatch layer or below the soil level in the roots. Insects can also attract other pests, such as moles. Contact us today, we can build a custom program to address your lawn care needs.
                        </Typography>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%',}}>  
                <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B' }}>
                            Soil Testing
                        </Typography>
                        <Typography variant="body1" component="div">
                           Soil testing is beneficial for the measurement of nutrients in the lawn, the pH of the soil, and the combination or ratio of phosphorus, potassium, and nitrogen. The pH should be determined as some grass types grow better in acidic soil whilst others require a less acidic environment.
						</Typography>
					</Card>
                </Box>
                <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>  
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B' }}>
                            <strong>NEW SERVICE: </strong> Backflow Repair and Testing
                        </Typography>
                        <Typography variant="body1" component="div" sx={{marginBottom: 2}}>
							The purpose of a backflow prevention assembly is to keep the outside water (which can contain contaminates such as fertilizer, pesticides, ect.) from back flowing and entering into your drinking water or the water provider's system.
                        </Typography>
						<Typography variant="body1" component="div" sx={{marginBottom: 2}}>
							Annual testing of your backflow prevention assembly is required by the Virginia Department of Health and your local water provider.
						</Typography>
						<Typography variant="body1" component="div">
							<strong>All documentation forwarded to Local Water Authority</strong>
						</Typography>
                            <img src={backflow} alt="Backflow Testing" style={{ width: '50%', marginTop: '15px', borderRadius: '5px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                        </Card>
                </Box>
            </Box>
        </Box>
	);
}

export default Services;
