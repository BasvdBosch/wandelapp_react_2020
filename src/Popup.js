import React, {Component} from 'react';
import './App.js';
let popupStyle = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let popupStyleClose = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

class Popup extends Component {
    render() {
        let popup = (
            <div style={popupStyle}>
            <button style={popupStyleClose} onClick={this.props.onClose}>x</button>

            <div>{this.props.children}</div>
            </div>
        );
        if (! this.props.isOpen){
            popup = null ;
        }
        return(
            <div>
                {popup}
            </div>
        )
    }
    }
export default Popup;
