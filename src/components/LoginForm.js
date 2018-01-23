import React from 'react';
import Form from 'grommet/components/Form';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form>
                <FormFields>

                </FormFields>
                <Footer pad={{
                    "vertical": "medium"
                }}>
                    <Button label='Submit' type='submit' primary={true} onClick={() => handleSubmit(this.state)}/>
                </Footer>
            </Form>
        );
    }
}
