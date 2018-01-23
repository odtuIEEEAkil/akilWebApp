import React from 'react';

import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import User from 'grommet/components/icons/base/User';
import Button from 'grommet/components/Button';
import LoginForm from 'grommet/components/LoginForm';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import Modal from "../components/Modal"

class Layout extends React.Component {
    constructor () {
        super();
        this.state = {
            isLoginModalOpen: false
        };
    }

    render() {
        const {children} = this.props;
        return (
            <App>
                <Header>
                    <Title>
                        Akil
                    </Title>
                    <Box flex={true} justify='end' direction='row' responsive={false}>

                        <Button
                            icon={< User />}
                            label='LogIn/SignUp'
                            primary
                            onClick={() => 
                                this.setState({isLoginModalOpen: true})
                            }/>
                    </Box>
                </Header>
                <Box colorIndex="light-2" pad="medium">
                    {children}
                </Box>


                <Modal visible={this.state.isLoginModalOpen} 
                    onOutClick={() => this.setState({isLoginModalOpen: false})}> 
                    <Button
                        label='Back'
                        primary
                        onClick={() => {
                            this.setState({isLoginModalOpen: false})
                        }}/>
                    <Tabs justify="center" responsive>
                            
                        <Tab title='User'  justify="center" direction="row">
                            <div style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
                                <LoginForm onSubmit={(data) => console.log(data)}
                                    title='Get Mentored'/>
                            </div>
                        </Tab>

                        <Tab title='Mentor'>
                            <div style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
                                <LoginForm onSubmit={(data) => console.log(data)}
                                    title='Mentor' />
                            </div>
                        </Tab>
                    </Tabs>
                </Modal>
            </App>
        );
    }
}
export default Layout;
