import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from "./SideDrawer";



class Header extends Component {
    state={
        drawerOpen:false,
        headerShow:false

    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }
    handleScroll=(val)=>{
        if(window.scrollY>3){
            this.setState({
                headerShow:true
            })
        }else {
            this.setState({
                headerShow:false
            })
        }

    }
    toggleDrawer=(value)=>{
        this.setState({
            drawerOpen:value,
            headerShow:false
        })
    }
    render() {

        return (
            <AppBar
            position="fixed"
            style={
                {
                    backgroundColor:this.state.headerShow?'#2f2f2f':'transparent ',
                    boxShadow:'none',
                    border:'10px 0px',
                }
            }
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">{this.props.appName}</div>
                        <div className="header_logo_title">{this.props.appTitle}</div>
                    </div>
                    <IconButton

                        aria-label="Menu"
                        color="inherit"
                        onClick={()=>this.toggleDrawer(true)}

                    >

                        <MenuIcon>
                            31.1.31
                        </MenuIcon>
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}

                    />

                </Toolbar>

            </AppBar>
        );
    }
}



export default Header;
