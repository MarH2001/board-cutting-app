import { Fragment, useState, useCallback } from "react";
import { TableRow, TableCell, Button, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { EditingDialog } from "./EditingDialog";

export const Actions = ({ item, index, data, setData }) => {
    const [editingItemId, setEditingItemId] = useState(null);
    const [editedItem, setEditedItem] = useState({
        height: 0, 
        width: 0,
        quantity: 0,
    });
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleCloseModal = useCallback(() => {
        setEditingItemId(null);
        setEditedItem({
            height: 0, 
            width: 0,
            quantity: 0,
        });
        setDialogOpen(false);
    }, []);

    const handleEditData = useCallback((id) => {
        const itemToEdit = data.find((item) => item.id === id);
        setEditingItemId(id);
        setEditedItem(itemToEdit);
        setDialogOpen(true);
    }, [data]);

    const handleSaveEdit = useCallback(() => {
        if (editedItem) {
            const index = data.findIndex((item) => item.id === editingItemId);

            const editedItemCopy = { ...data[index] };
            editedItemCopy.height = editedItem.height;
            editedItemCopy.width = editedItem.width;
            editedItemCopy.quantity = editedItem.quantity;

            const updatedData = [...data];
            updatedData[index] = editedItemCopy;

            setData(updatedData);
            handleCloseModal();
        }
    }, [data, editedItem, editingItemId, handleCloseModal, setData]);

    const handleRemoveData = useCallback((id) => {
        const filteredData = data.filter(item => item.id !== id);
        setData(filteredData);
    }, [data, setData]);

    return (
        <Fragment>
            <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell sx={{ pl: 2 }}>
                    {item.height}
                </TableCell>
                <TableCell sx={{ pl: 2 }}>
                    {item.width}
                </TableCell>
                <TableCell sx={{ pl: 2 }}>
                    {item.quantity}
                </TableCell>
                <TableCell>
                    <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => handleEditData(item.id)}
                        sx={{ px: 3 }}>
                        Edit
                    </Button>
                    <IconButton sx={{ ml: 1 }} onClick={() => handleRemoveData(item.id)}><ClearIcon /></IconButton>
                </TableCell>
            </TableRow>
            <EditingDialog
                setEditedItem={setEditedItem}
                editedItem={editedItem}
                handleSaveEdit={handleSaveEdit}
                handleCloseModal={handleCloseModal}
                isDialogOpen={isDialogOpen}
            />
        </Fragment>
    )
}