import {Component} from 'react';

class ClassAddComponent extends Component {
    render() {
        return (
            <h1>
                Class Component Total: {this.props.firstNumber + this.props.secondNumber}
            </h1>
        )
    }
}

export default ClassAddComponent;