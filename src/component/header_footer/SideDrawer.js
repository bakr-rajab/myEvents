
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
    return (
        <Drawer
            // role="button"
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={()=>console.log(465465)}>
                    button
                </ListItem>
                <ListItem button onClick={()=>console.log(465465)}>
                    chick
                </ListItem>
                <ListItem button onClick={()=>console.log(465465)}>
                    hello
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
