import { Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import InfoBlock from '../components/InfoBlock';
import { React } from 'react';

function LawnPrograms() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <PageHeader title="Lawn Programs" />
            <InfoBlock title="Step 1: Early Spring Application (Late February – March)" content="This is a liquid application that covers the entire lawn. It contains pre-emergent for the prevention of Crabgrass and other weedy-grasses, broadleaf herbicide to eliminate existing weeds, and a light rate of nitrogen to improve color." />
            <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Step 2: Late Spring Application (April – Mid May)" content="This is a liquid application that covers the entire lawn. It contains pre-emergent for the prevention of Crabgrass and other weedy-grasses, broadleaf herbicide to eliminate existing and newly emerging summer weeds, and a very light rate of nitrogen to maintain color." />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Step 3: Early Summer Application (Mid May – June)" content="A summer-safe, iron, and potassium-rich fertilizer is used now. Summer weeds are treated at this time. Certain summertime weeds are very resilient and may not be completely removed by one treatment. Examples include Yellow Nutsedge, Dallisgrass, wild Violets, and Virginia Buttonweed." />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Step 4: Late Summer Application (July – August)" content="Based on your soil test results, we alternate years with either Organic Compost-type fertilizer or Pelletized Lime to improve soil composition and nutrient uptake. This will also be beneficial for any seeding done in the fall. Summer weeds are treated at this time." />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Step 5: Early Fall Application (September – Mid October)" content="Proper rate of Special Blend granular fertilizer on lawn and spot weed control. *If you are also one of our Core Aeration and Seeding customers, your Early Fall application will be done on the same day as your Aeration service." />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Step 6: Late Fall Application (Mid October – Mid November)" content="Heavy rate of balanced fertilizer with macro-nutrients and spot weed control." />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Step 7: Winter Application (Mid November – December)" content="Heavy rate of balanced fertilizer to “winterize” the lawn and set up for quick recovery in the following spring. Spot weed control." />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}></Box>
            <InfoBlock title="Also Available – 5 Step Weed & Fertilization Program for Bermuda and Zoysia Lawns" content="This program is designed specifically for Bermuda and Zoysia lawns, providing targeted treatments to maintain optimal health and appearance throughout the year." />
        </Box>
    );
}

export default LawnPrograms;