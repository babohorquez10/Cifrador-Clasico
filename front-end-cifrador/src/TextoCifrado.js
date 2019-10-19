import React from 'react';

class Texto extends React.Component {

    render() {
        return (
            <div>
                <h2>Texto Cifrado: </h2>
                <textarea rows="10" className="col-12" placeholder="Ingrese el texto a cifrar..." 
                value={this.props.textoCifrado} readOnly >
                    
                </textarea>

            </div>
          );
    }
  
}

export default Texto;