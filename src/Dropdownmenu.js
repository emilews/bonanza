import React, {Component} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Dropdownmenu.css'

class DropdownMenuHandler extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  Force(){
    this.forceUpdate();
    console.log(this.state.data)
  }

  render(){
    return(
      <div>
       
          <img className="logo" src="http://localhost:8000/media/logo3n.png" />

      </div>
        );
    }
}
export default DropdownMenuHandler;