import React, { Component } from 'react';
import '../css/reviewPage.css'
import {root} from'../index';
import ClaimForm from './ClaimForm';

class ReviewPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            modalIsOpen:false
        }

    }
    componentDidMount() {
        console.log(this.props.reviewInfo);
    }

    handleBack=()=>{
        root.render(
            <React.StrictMode>
                <ClaimForm fromScreen="backButton"/>
            </React.StrictMode>
        );
    }
    handleSubmit=()=>{
        alert("Your form is submitted succesfully!");
        root.render(
            <React.StrictMode>
                <ClaimForm fromScreen="submit"/>
            </React.StrictMode>
        );
    }

    handleModalClose = () => {
        this.setState({
            modalIsOpen:false
        })
    };

    render() {
        return (
            <React.Fragment>
                <div className='reviewPageContainer'>
                    <div>
                        <fieldset>
                            <legend>
                                Details
                            </legend>
                            <div  className='reviewDataContainer'>
                                <table>
                                    <tr>
                                        <td>
                                        Full Name  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.fullName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Phone number  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Email  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Address  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.address}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        City 
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.city}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Zip Code  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.zip}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        State  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.stateVal.value}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Date of Power Loss  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.powerLoss.getDate()+'-'+(this.props.reviewInfo.powerLoss.getMonth()+1)+'-'+this.props.reviewInfo.powerLoss.getFullYear()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Loss Amount  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.lossAmount}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Insurance  
                                        </td>
                                        <td>
                                        {this.props.reviewInfo.insurance}
                                        </td>
                                    </tr>
                                    

                                </table>
                                
                            </div>
                            
                        </fieldset>
                        <div className="Allbuttons">
                            <button className="SubmitButton" onClick={() => this.handleSubmit()}> Submit</button>
                        <button className="BackButton" onClick={() => this.handleBack()}>Go Back</button>
                        </div>
                    </div>

                                    

                </div>
            </React.Fragment>
        )
    }

}

export default ReviewPage;