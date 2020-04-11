import React from 'react';
import httpClient from './../../utils/httpClient';
import cogoToast from 'cogo-toast';

const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { ...defaultForm },
            err: {
                firstName:'*',
                lastName:'*',
                email:'*',
                message:'*'
            },
            isSubmitting: false,
            isValid: false
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState(()=>{
            return{
                isSubmitting:true
            }
        },()=>{
            httpClient.post('/mail',this.state.data)
                .then((response)=>{
                    cogoToast.success('Your message has been sent succesfully')
                }).catch(err=>{
                    cogoToast.err('Oops! Something went wrong. Pls try again.')
                }).finally(()=>{
                    this.setState((prevState)=>{
                        return{
                            data: {...defaultForm},
                            err: {
                                firstName:'*',
                                lastName:'*',
                                email:'*',
                                message:'*'
                            },
                            isSubmitting:false,
                            isValid: false
                        }
                    })
                })
        })
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState((prevState) => {
            return {
                data: {
                    ...prevState.data,
                    [name]: value
                }
            }
        }, () => {
            this.checkValidity(name);
        })
    }
    checkValidity = (name) => {
        let errMsg;
        switch (name) {
            case 'firstName': this.state.data.firstName.length === 0
                ? errMsg = 'First Name is required'
                : errMsg = ''
                break;
            case 'lastName': this.state.data.lastName.length === 0
                ? errMsg = 'Last Name is required'
                : errMsg = ''
                break;
            case 'email': this.state.data.email.length === 0
                ? errMsg = 'Email is required'
                : errMsg = this.state.data.email.includes('@' && 'com') ? '' : 'Invalid Email'
                break;
            case 'message': this.state.data.message.length === 0
                ? errMsg = 'Your message is required'
                : errMsg = ''
                break;
            default: break;
        }
        this.setState((prevState) => {
            return {
                err: {
                    ...prevState.err,
                    [name]: errMsg
                }
            }
        }, () => {
            const { err } = this.state;
            const errors = Object.values(err).filter(item => item);
            let validForm = errors.length === 0 ? true : false;
            this.setState({
                isValid: validForm
            })
        })
    }
    render() {
        let submitBtn = this.state.isSubmitting
            ? <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Sending..." />
            : <input type="submit" disabled={!this.state.isValid} className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message" />
        return (
            <>

                <div className="site-section bg-white">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-7 mx-auto text-center">
                                <h2 className="heading-29190">Contact Us</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mb-5">
                                    <form onSubmit={this.handleSubmit} method="POST" >
                                        <div className="form-group row">
                                            <div className="col-md-6 mb-4 mb-lg-0">
                                                <input onChange={this.handleChange} type="text" className="form-control" placeholder="First name" name="firstName" value={this.state.data.firstName}/>
                                                <span style={{ color: 'red' }}>{this.state.err.firstName}</span>
                                            </div>
                                            <div className="col-md-6">
                                                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Last name" name="lastName" value={this.state.data.lastName} />
                                                <span style={{ color: 'red' }}>{this.state.err.lastName}</span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input onChange={this.handleChange} type="text" className="form-control" placeholder="Email address" name="email" value={this.state.data.email}/>
                                                <span style={{ color: 'red' }}>{this.state.err.email}</span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <textarea onChange={this.handleChange} className="form-control" placeholder="Write your message." cols={30} rows={10} name="message" value={this.state.data.message} />
                                                <span style={{ color: 'red' }}>{this.state.err.message}</span>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6 mr-auto">
                                                {submitBtn}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4 ml-auto">
                                    <div className="bg-white p-3 p-md-5">
                                        <h3 className="text-black mb-4">Contact Info</h3>
                                        <ul className="list-unstyled footer-link">
                                            <li className="d-block mb-3">
                                                <span className="d-block text-black">Address:</span>
                                                <span>Pepsi Cola, Kathmandu, Nepal</span></li>
                                            <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>+ 00-977-9863817101</span></li>
                                            <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>angeltechnepal@gmail.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}