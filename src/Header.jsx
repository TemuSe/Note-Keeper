import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import Time from "./Time";
import Logout from "./Logout";

function Header({isMain}){
    return (
        isMain?
        <header>
            <h1>
            <EditNoteIcon />
            Note Keeper
            </h1>
            <Logout />
            <Time />
        </header>
        :
        <header>
            <h1>
            <EditNoteIcon />
            Note Keeper
            </h1>
            <Time />
        </header>
    );
}

export default Header;