import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


import DoneAllIcon from "@material-ui/icons/DoneAll";
import MoreVertIcon from "@material-ui/icons/MoreVert";


const styles = {
  title : {
    marginLeft : 20,
    flexGrow : 1

  }
}
/*const styles  = {
  header : {
    margin : 0,
    padding : 10,
    background : 'black',
    color : 'red' ,
    fontsize : 20
  }
};*/

class Header extends React.Component{
  state = {
    anchorEl: null
  }
  showMenu = (event) => {
    this.setState({
      anchorEl:event.currentTarget
    });
  }
  hideMenu = () =>{
    this.setState({
      anchorEl:null
    });
  }
  render(){
    return(
      <AppBar position="static">
        <Toolbar>
        <Badge badgeContent = {this.props.count} color = "secondary">
          <DoneAllIcon/>
        </Badge>
          <Typography variant="h6" style= {styles.title}>
            Todo List
          </Typography>
          <IconButton color = "inherit" onClick={this.showMenu}>
            <MoreVertIcon/>
          </IconButton>
          <Menu
            anchorEl = {this.state.anchorEl}
            open = {Boolean(this.state.anchorEl)}
            onClose = {this.hideMenu}
          >
            <MenuItem onClick = {() => {
              this.hideMenu();
              this.props.clear();
            }}>
            Clear All DoneAll
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
