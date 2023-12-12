import { useCallback, useState } from "react";
import { TableContainer } from "@mui/material";
import { DataTable } from "./DataTable";
import { AddSlices } from "./AddSlices";


export const AddList = ({ selected }) => {
    const [height, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [quantity, setQuantity] = useState("");
    const [data, setData] = useState([]);

    const handleLengthChange = useCallback((e) => {
        setLength(e.target.value);
    }, []);

    const handleWidthChange = useCallback((e) => {
        setWidth(e.target.value);
    }, []);

    const handleQuantityChange = useCallback((e) => {
        setQuantity(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        if (height && width && quantity) {
            const id = Date.now();
            const newData = { id, height, width, quantity };
            setData([...data, newData]);
            setLength("");
            setWidth("");
            setQuantity("");
        }
    }, [data, height, width, quantity]);

    return (
        <TableContainer sx={{ overflowX: "inherit" }}>
            <DataTable
                data={data}
                height={height}
                width={width}
                quantity={quantity}
                handleLengthChange={handleLengthChange}
                handleWidthChange={handleWidthChange}
                handleQuantityChange={handleQuantityChange}
                handleSubmit={handleSubmit}
                setData={setData}
            />

            <AddSlices data={data} selected={selected} />
        </TableContainer>
    )
}