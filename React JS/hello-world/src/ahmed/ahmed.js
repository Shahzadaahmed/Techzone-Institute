// Note: AhmedTesting component...!

import
React,
{
    Fragment,
    Component,
    PureComponent
} from 'react';
import ChildTesting from './child';

class AhmedTesting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num: 0
        };
    };


    // Note: Button handler...!
    btnHandler = () => {
        this.setState({
            num: 10
        });
    };

    render() {
        // console.log(this.state.num);

        return (
            <Fragment>
                <ChildTesting topic="React JS" />

                <h1> Whta is PureComponent in React JS </h1>
                <button onClick={this.btnHandler}> Testing </button>
            </Fragment>
        );
    };
};

export default AhmedTesting;