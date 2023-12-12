import React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Typography,
    TextField,
    Button
} from "@mui/material";
import { Actions } from "./Actions";

export const DataTable = ({
    data,
    height,
    width,
    quantity,
    handleLengthChange,
    handleWidthChange,
    handleQuantityChange,
    handleSubmit,
    setData
}) => {

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography variant="body1" fontWeight="bold">№</Typography>
                    </TableCell>
                    <TableCell align="left">
                        <Typography variant="body1" fontWeight="bold">Height (mm)</Typography>
                    </TableCell>
                    <TableCell align="left">
                        <Typography variant="body1" fontWeight="bold">Width (mm)</Typography>
                    </TableCell>
                    <TableCell align="left">
                        <Typography variant="body1" fontWeight="bold">Quantity</Typography>
                    </TableCell>
                    <TableCell align="left">
                        <Typography variant="body1" fontWeight="bold">Edit detail</Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <Actions key={item.id} item={item} index={index} data={data} setData={setData} />
                ))}
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                        <TextField
                            onChange={handleLengthChange}
                            value={height}
                            inputProps={{ min: 0 }}
                            type="number"
                            min={0}
                            size="small"
                            variant="outlined"
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            onChange={handleWidthChange}
                            value={width}
                            inputProps={{ min: 0 }}
                            type="number"
                            size="small"
                            variant="outlined"
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            onChange={handleQuantityChange}
                            value={quantity}
                            inputProps={{ min: 0 }}
                            type="number"
                            size="small"
                            variant="outlined"
                        />
                    </TableCell>
                    <TableCell>
                        <Button variant="outlined" color="inherit" onClick={handleSubmit} sx={{ px: 3 }}>
                            Add
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}