import React, {Component} from 'react';
import Form from '../Forms/Form';
import './FormInput.css';
import Modal from '../Modal/Modal';
import axios from '../axios-orders';


class FormInput extends Component {
    state = {
        orderForm: {
            month: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Month'
                },
                value: ''
            },
            food: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Food'
                },
                value: '',
                id:0
            },
            utilities: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Utilities'
                },
                value: '',
                id:1
            },
            transporation: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Transporation'
                },
                value: '',
                id:2
            },
            entertainment: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Entertainment'
                },
                value: '',
                id:3
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

    axios.post( '/charts.json', order )
        .then( response => {
            this.setState( { loading: false } );
        })
        .catch( error => {this.setState( { loading: false } );
        });
        this.setState({submited:true});
        // if(this.state.submited === false){
        //     this.props.history.push('/');
        // }
    }

inputChangedHandler = (event, inputIdentifier) => {
    let id = this.state.orderForm[inputIdentifier].id
    this.props.inputCallBack(event.target.value,id)
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
        // this.props.history.push( '/' );

}

render () {
    const formElementsArray = [];
    console.log(this.state.orderForm)
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
            changed={(event) => this.inputChangedHandler(event, formElement.id)} 
            />

        )
            
            )
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
            <Modal show={this.state.submited} modalClosed={this.submitCanceler}>
                {confirmation}
            </Modal>
        </div>
);
}
}

export default FormInput;