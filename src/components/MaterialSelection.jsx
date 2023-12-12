import { Fragment, useCallback, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import blackMaterialImg from "../images/rotate_59.jpg";
import greyMaterialImg from "../images/rotate_60.jpg";
import woodMaterialImg from "../images/rotate_61.jpg";
import lightWoodMaterialImg from "../images/rotate_130.jpg";
import { AddList } from "./AddList";

const materialArr = [
    { id: 1, name: "blackMaterial", src: blackMaterialImg },
    { id: 2, name: "greyMaterial", src: greyMaterialImg },
    { id: 3, name: "woodMaterial", src: woodMaterialImg },
    { id: 4, name: "lightWoodMaterial", src: lightWoodMaterialImg }
];

export const MaterialSelection = () => {
    const [selected, setSelected] = useState({});

    const handleSelectMaterial = useCallback((material) => {
        setSelected(material);
    }, []);

    return (
        <Fragment>
            <Typography variant="h5" ml={2} mb={2}>Material selection</Typography>
            <Stack direction="row" gap={2} ml={2} mb={4}>
                {materialArr.map(material => (
                    <Box
                        key={material.id}
                        onClick={() => handleSelectMaterial(material)}
                        width={110}
                        height={110}
                        border={selected === material ? 2 : 1}
                        borderColor={selected === material ? "blue" : ""}
                        sx={{ cursor: "pointer" }}
                    >
                        <img width="100%" height="100%" src={material.src} alt={material.name} />
                    </Box>
                ))}
            </Stack>
            <AddList selected={selected} />
        </Fragment>
    )
}