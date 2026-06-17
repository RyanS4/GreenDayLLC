import { React } from "react";
import { Typography } from "@mui/material";

export default function PageHeader({ title }) {
    return (
        <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ marginTop: 4 }}>
            {title}
        </Typography>
    )
}
