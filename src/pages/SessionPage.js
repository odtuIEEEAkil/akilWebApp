import React from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Button from 'grommet/components/Button';
import VideoChat from "../components/VideoChat";


const SessionPage = ({data}) => [ 
    <pre>
        Akil Akil gel Pesime takil.
    </pre>,
    
    <VideoChat/>,

    <Button label="Send Message" primary={true} onClick={() => console.log("clicked")} />
]

const MY_QUERY = gql`
    query {
        allUsers {
            id,
            name
        }
    }
`;

export default graphql(MY_QUERY)(SessionPage);