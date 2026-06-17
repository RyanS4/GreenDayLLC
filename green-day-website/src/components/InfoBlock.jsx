import { React } from "react";
import { Typography, Box} from "@mui/material";

function InfoBlock({ title, content }) {
    return (
        <Box sx={{ margin: 2 }}>
            <Typography variant="h5" component="div" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" component="div">
                {content}
            </Typography>
        </Box>
    )
}

export default InfoBlock;