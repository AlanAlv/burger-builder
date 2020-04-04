import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form action="">
                    <input classname={classes.Input} type="text" name="name" placeholder='Your Name' id=""/>
                    <input classname={classes.Input} type="email" name="email" placeholder='Your Mail'id=""/>
                    <input classname={classes.Input} type="text" name="street" placeholder='Street'id=""/>
                    <input classname={classes.Input} type="text" name="postal" placeholder='Postal Code'id=""/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;