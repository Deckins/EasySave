import React, {Component} from 'react';
import Form from '../Forms/Form';
import './FormInput.css';
import Modal from '../Modal/Modal';
import axios from '../axios-orders';


class FormInput extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            }},

            loading: false,
            submited: false

    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
    const order = formData

    axios.post( '/users.json', order )
        .then( response => {
        this.setState( { loading: false } );
        this.props.history.push( '/' );
        })
        .catch( error => {this.setState( { loading: false } );
        });
        this.setState({submited:true});
    }

inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
}

    submitCanceler = () =>{
        this.setState({submited:false})
    }

render () {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
        formElementsArray.push({
            id: key,
            config: this.state.orderForm[key]
        });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
        {console.log(formElementsArray)}
        {formElementsArray.map(formElement => (
            <Form
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))
        }
            <input type="submit" value="Submit"/>
        </form>
    );
    // if ( this.state.loading ) {
    //     form = <Spinner />;
    // }
    let confirmation = <div>Thank you for signing up!</div>
    return (
        <div className='ContactData'>
            <h4>Enter your Contact Data</h4>
            {form}
            <Modal show={this.state.submited} onclick={this.submitCanceler}>
                {confirmation}
            </Modal>
        </div>
);
}
}

export default FormInput;