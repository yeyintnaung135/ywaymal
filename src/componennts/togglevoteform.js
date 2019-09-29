import React from "react";

class togglevoteform extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        if (this.props.test == 'yes') {
            return (
                <a onClick={this.props.handleAddVote}
                   class={"btn  btn-sm  btn-danger yk-background"}
                   style={{color: 'white'}}>
                    <span class="fa fa-thumbs-down"></span>&nbsp;&nbsp;Unvote&nbsp;{111}
                </a>
            )
        } else {
            return (
                <a onClick={this.props.handleDeleteVote}
                   class={"btn  btn-sm  btn-danger yk-background"}
                   style={{color: 'white'}}>
                    <span class="fa fa-thumbs-up"></span>&nbsp;&nbsp;Vote&nbsp;{111}
                </a>
            )

        }
        ;
    }
}

export default togglevoteform;