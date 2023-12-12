import { Fragment } from "react";
import { Typography } from "@mui/material";
import { MaterialSelection } from "./MaterialSelection";

export const Main = () => {

    return (
        <Fragment>
            <Typography ml={2} mt={2} mb={3} variant="h4">Cutting Calculator</Typography>
            <MaterialSelection />
        </Fragment>
    )
}