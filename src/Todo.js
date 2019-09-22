import React from "react";
import Item from "./Item"

import List from "@material-ui/core/List";

class Todo extends React.Component{
  render(){
    return(
      <List>
        {this.props.items.map(item =>{
          return (
            <Item key ={item._id} item={item} remove = {this.props.remove}
            done = {this.props.done} undo = {this.props.undo} />
          )
        })}
      </List>
    )
  }
}

export default Todo;

/*class Done extends React.Component{
  render(){
    return(
      <ul>
        {this.props.items.map(item =>{
          return (
            <Item key ={item._id} item={item} remove = {this.props.remove} />
          )
        })}
      </ul>
    )
  }
}*/
