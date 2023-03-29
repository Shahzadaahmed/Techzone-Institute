// Note: ChildTesting component...!

import
React,
{
    Fragment,
    Component,
    PureComponent
}
    from 'react';

class ChildTesting extends PureComponent {
    constructor(props) {
        super(props);
    };


    render() {
        console.log(this.props);

        return (
            <Fragment>
                <h1> I am a child component! and we are learning {this.props?.topic} </h1>
            </Fragment>
        );
    };
};

export default ChildTesting;