import React from 'react';
import { ProductBag } from '../productBag/ProductBag.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;