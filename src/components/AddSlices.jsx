import { useCallback, useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export const AddSlices = ({ data, selected }) => {
    const [boards, setBoards] = useState([]);

    const boardWidth = 1830;
    const boardHeight = 3630;

    const boxSx = {
        position: "relative",
        backgroundImage: `url(${selected.src})`,
        width: boardWidth + "px",
        height: boardHeight + "px",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        marginTop: 2,
    };

    const squareStyle = {
        position: "absolute",
        background: "red",
        opacity: 0.5,
        border: "1px solid #000",
    };

    useEffect(() => {
        calculateBoards(data);
    }, [data]);

    const calculateBoards = (itemsData) => {
        const boards = [];
        let currentBoard = { items: [], remainingWidth: boardWidth, remainingHeight: boardHeight };

        itemsData.forEach((element) => {
            let count = element.quantity;

            while (count > 0) {
                if (currentBoard.remainingWidth < element.width) {
                    currentBoard.remainingWidth = boardWidth;
                    currentBoard.remainingHeight -= element.height;
                }

                if (currentBoard.remainingHeight < element.height) {
                    boards.push(currentBoard);
                    currentBoard = { items: [], remainingWidth: boardWidth, remainingHeight: boardHeight };
                }

                currentBoard.items.push({
                    element,
                    left: boardWidth - currentBoard.remainingWidth,
                    top: boardHeight - currentBoard.remainingHeight,
                });

                currentBoard.remainingWidth -= element.width;
                count--;
            }
        });

        boards.push(currentBoard);
        setBoards(boards);
    };

    const renderBoards = useCallback(() => {
        return boards.map((board) => (
            <Box key={uuidv4()} sx={boxSx}>
                {board.items.map((item) => (
                    <div
                        key={uuidv4()}
                        style={{
                            ...squareStyle,
                            left: item.left + "px",
                            top: item.top + "px",
                            width: item.element.width + "px",
                            height: item.element.height + "px",
                        }}
                    ></div>
                ))}
            </Box>
        ));
    }, [boards, boxSx]);

    return (
        <Stack my={4} flexWrap="wrap" justifyContent="center" alignItems="center">
            {renderBoards()}
        </Stack>
    );
};