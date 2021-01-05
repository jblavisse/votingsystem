import React, { Component } from 'react';
import Box from "./Box";

class App extends Component {
    state= {
        boxes: [
            {title: "Ma boite 1"},
            {title: "truc muche"},
            
        ]
    }
    render() {
        return (
            <div class="container">
                <Box title="Ma boite 1" />
                <Box title="Truc muche" />
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
        )
    }
}

export default App;
