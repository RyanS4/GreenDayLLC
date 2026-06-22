import { Typography, Box, Card } from '@mui/material';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import InfoBlock from '../components/InfoBlock';
import { React } from 'react';

function LawnPrograms() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <PageHeader title="Lawn Programs" />
            <Typography sx={{ padding: 2, fontSize: '25px' }} align="center">We offer a 7 step lawn care program to best maintain your lawn throughout the different stages of the year</Typography>
            <hr />
            <Box sx={{display: 'flex', width: '100%',}}>
                <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 1: Early Spring Application (Late February – March)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}>
                            This is a liquid application that covers the entire lawn. It contains pre-emergent for the prevention of Crabgrass and other weedy-grasses, broadleaf herbicide to eliminate existing weeds, and a light rate of nitrogen to improve color.
                        </Typography>
                    </Card>
                </Box>
                <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 2: Late Spring Application (April – Mid May)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}>
                            This is a liquid application that covers the entire lawn. It contains pre-emergent for the prevention of Crabgrass and other weedy-grasses, broadleaf herbicide to eliminate existing and newly emerging summer weeds, and a very light rate of nitrogen to maintain color.
                        </Typography>
                    </Card>
                </Box>
            </Box>
                <Box sx={{ display: 'flex', width: '100%',}}>
                    <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                         <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 3: Early Summer Application (Mid May – June)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}    >
                            A summer-safe, iron, and potassium-rich fertilizer is used now. Summer weeds are treated at this time. Certain summertime weeds are very resilient and may not be completely removed by one treatment. Examples include Yellow Nutsedge, Dallisgrass, wild Violets, and Virginia Buttonweed.
                        </Typography>
                    </Card>
                    </Box>
                    <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 4: Late Summer Application (July – August)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}>
                            Based on your soil test results, we alternate years with either Organic Compost-type fertilizer or Pelletized Lime to improve soil composition and nutrient uptake. This will also be beneficial for any seeding done in the fall. Summer weeds are treated at this time.
                        </Typography>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%',}}>  
                <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 5: Early Fall Application (September – Mid October)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}>
                            Proper rate of Special Blend granular fertilizer on lawn and spot weed control. *If you are also one of our Core Aeration and Seeding customers, your Early Fall application will be done on the same day as your Aeration service.
                        </Typography>
                    </Card>
                </Box>
                <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>  
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 6: Late Fall Application (Mid October – Mid November)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}>
                            Heavy rate of balanced fertilizer with macro-nutrients and spot weed control.
                        </Typography>
                    </Card>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', alighnSelf: 'left', p: 2}}>
                <Box sx={{flex: 1, p: 2, justifyContent: 'center', display: 'flex'}}>
                    <Card sx={{ margin: 2, padding: 2, backgroundColor: '#E8F5E9' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                            Step 7: Winter Application (Mid November – December)
                        </Typography>
                        <Typography variant="body1" component="div" align='center' sx={{justifyContent: 'center', display: 'flex'}}>
                            Heavy rate of balanced fertilizer to “winterize” the lawn and set up for quick recovery in the following spring. Spot weed control.
                        </Typography>
                    </Card>
                </Box>
            </Box>
            <Box sx= {{width: '100%', alignSelf: 'center', p: 2, justifyContent: 'center'}}>
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color : '#06402B', justifyContent: 'center', display: 'flex' }}>
                    Also Available
                </Typography>
                <Typography variant="body1" component="div" align='center' sx={{ justifyContent: 'center', display: 'flex', fontSize: '20px' }}> 
                    5 step weed & fertilization program for bermuda and zoysia lawns
                </Typography>
            </Box>
        </Box>
    );
}

export default LawnPrograms;