import React from "react";

// Class fields syntax 를 사용한 방법
class ConfirmButtonClassFieldsSyntax extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };
    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <div>
                <h3>Class field syntax 방법</h3>
                <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
                </button>
            </div>
            
        )
    }
}

export default ConfirmButtonClassFieldsSyntax;