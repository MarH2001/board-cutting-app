import React from "react";
import { TextField, Button, Dialog, Typography, Stack } from "@mui/material";

export const EditingDialog = ({
    setEditedItem,
    editedItem,
    handleSaveEdit,
    handleCloseModal,
    isDialogOpen,
}) => {

    return (
        <Dialog
            open={isDialogOpen}
            onClose={handleCloseModal}
            fullWidth
        >
            <Typography variant="h6" my={2} ml={1}>Edit details </Typography>
            <Stack gap={2} m={1}>
                <TextField
                    label="height"
                    size="small"
                    inputProps={{ min: 0 }}
                    type="number"
                    value={editedItem.height}
                    onChange={(e) =>
                        setEditedItem({ ...editedItem, height: e.target.value })
                    }
                />
                <TextField
                    label="Width"
                    size="small"
                    inputProps={{ min: 0 }}
                    type="number"
                    value={editedItem.width}
                    onChange={(e) =>
                        setEditedItem({ ...editedItem, width: e.target.value })
                    }
                />
                <TextField
                    label="Quantity"
                    size="small"
                    inputProps={{ min: 0 }}
                    type="number"
                    value={editedItem.quantity}
                    onChange={(e) =>
                        setEditedItem({ ...editedItem, quantity: e.target.value })
                    }
                />
            </Stack>
            <Stack direction="row" gap={1} justifyContent="end" m={1}>
                <Button
                    variant="contained"
                    onClick={handleSaveEdit}
                    size="small"
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    onClick={handleCloseModal}
                    button="small"
                >
                    Cancel
                </Button>
            </Stack>
        </Dialog>
    )
}