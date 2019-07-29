// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from "react-reveal/Zoom";
import calImg from "../../resources/images/icons/calendar.png";
import locImg from "../../resources/images/icons/location.png";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={};
    }
    makeField(id, col, name) {
        const
            value = this.state[id] || '',
            invalid = !!(value.length % 2), // check if odd
            className = 'form-control' + (invalid?' is-invalid':'');
        return(
            <div className={`col-md-${col} mb-3`}>
                <label>{name}</label>
                <input
                    type="text"
                    className={className}
                    data-id={id}
                    placeholder={name}
                    value={value}
                    onChange={this.handleChange}
                />
                {/* The next line is where you specify that the
            error message should be shown only
            when the 'invalid' variable is true    */}
                <Fade bottom collapse when={invalid}>
                    <div className="invalid-feedback"
                        //Boostrap 4 uses some CSS tricks to simplify
                        //error handling but we're doing it differently
                        //so the next line disables these tricks
                         style={{ display: 'block' }}
                    >
                        Oh no, the number of characters is odd
                    </div>
                </Fade>
            </div>
        );
    }
    handleChange({ target }) {
        this.setState({
            [target.getAttribute('data-id')]: target.value
        });
    }
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper">
                    <div className="vn_wrapper">

                        <Zoom left duration={3000}>
                            <div className="vn_item">
                                <div className="vn_outer bck_yellow" style={{
                                    width:'900px'
                                }}>
                                    <div className="vn_inner">
                                        <div className="vn_icon_square bck_yellow"></div>
                                        <div className="vn_icon"
                                             style={{background:`url(${locImg})`}}
                                        ></div>
                                        <div className="vn_title">
                                            Going to event
                                        </div>
                                        <div className="vn_desc align-content-between" style={{
                                            marginLeft:'70px'
                                        }}>
                                            <form autoComplete="off" >
                                                <div className="form-row">
                                                    {this.makeField('f1',4, 'First nаme')}
                                                    @copy
                                                    {this.makeField('f2',4, 'Lаst name')}
                                                </div>
                                                <div className="form-row">
                                                    {this.makeField('f3',4, 'Email Address')}
                                                    {this.makeField('f4',4, 'pass Word')}
                                                </div>

                                                <div className="form-row">
                                                    {this.makeField('f5',6, 'Citу')}
                                                </div>
                                                <button className="btn btn-success" type="button">
                                                    Submit form
                                                </button>
                                                <small className="form-text text-muted">
                                                    This button does nothing and is here
                                                    just for the demo.
                                                </small>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>


        );
    }
}

export default SignUp;
