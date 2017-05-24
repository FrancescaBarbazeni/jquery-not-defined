import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import $ from "jquery";
import 'jquery-ui/themes/base/resizable.css';
import 'jquery-ui/ui/widgets/resizable';

class App extends Component {
    componentDidMount(){
        $(function() {
            $( "table#order-table th" ).resizable({
                handles: "e",
                minWidth: 10,
                resize: function (event, ui) {
                    var sizerID = "#" + $(event.target).attr("id") + "-sizer";
                    $(sizerID).width(ui.size.width);
                }
            });
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <br />
                <table
                    id="order-table"
                    style={{border: '1px solid #000'}} >
                    <tbody>
                    <tr>
                        <th id={"column-header-1"}>first col</th>
                        <th id={"column-header-2"}>second col</th>
                    </tr>
                    <tr>
                        <td>val</td>
                        <td>val</td>
                    </tr>
                    <tr>
                        <td>val</td>
                        <td>val</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App
