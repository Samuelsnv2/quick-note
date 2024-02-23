import React, { useState, Fragment } from 'react';
//import { useNavigate } from 'react-router-dom';
// Material UI
import {
    AppBar,
    Avatar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
// Icons
import { MdHome, MdNoteAdd } from "react-icons/md";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FiMenu } from "react-icons/fi";
// CSS
import "./Menu.css";

function Menu(props) {
    const [currentPage, setCurrentPage] = useState('/home');
    const [open, setOpen] = useState(false);

    function handleClick(pathName) {
        window.location.replace(`http://localhost:3000${pathName}`);
        setCurrentPage(pathName);
    }

    function handleDrawer(isOpen) {
        setOpen(isOpen);
    }

    const pages = [
        {
            pathName: '/home',
            icon: <MdHome />,
            text: 'Minhas anotações',
            iconSize: "1.5em"
        },
        {
            pathName: '/',
            icon: <MdNoteAdd />,
            text: 'Nova anotação',
            iconSize: "1.5em"
        },
        {
            pathName: '/',
            icon: <FaTrash />,
            text: 'Arquivo',
            iconSize: "1.3em"
        },
        {
            pathName: '/profile',
            icon: <FaUserAlt />,
            text: 'Perfil',
            iconSize: "1.3em"
        }
    ]

    return (
        <>
            <AppBar position="static">
                <Toolbar className="toolBar">
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        onClick={() => {handleDrawer(!open)}}
                    >
                        <FiMenu />
                    </IconButton>
                    <div className="userContainer">
                        <p className="username">Samuel Viana</p>
                        <Avatar alt="Samuel Viana" src="/images/Avatar.png"/>
                    </div>
                </Toolbar>
            </AppBar>
            {props.children}
            <Drawer open={open} onClose={() => handleDrawer(false)}>
                <List className='list'>
                    {pages.map((listItems) => {
                        return (
                            <ListItem
                                button
                                selected={currentPage === listItems.pathName}
                                onClick={() => {handleClick(listItems.pathName)}}
                            >
                                <IconContext.Provider value={{ color: "#343434", size: listItems.iconSize }}>
                                    {listItems.icon}
                                </IconContext.Provider>
                                <ListItemText className="listItemText">
                                    <Typography>{listItems.text}</Typography>
                                </ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
}

export default Menu;