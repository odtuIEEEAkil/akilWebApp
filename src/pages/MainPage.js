import React from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Box from 'grommet/components/Box';
import MentorList from '../components/MentorList';

import Spinning from 'grommet/components/icons/Spinning';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';

const MainPage = ({data}) => <Box>
    <Article colorIndex='grey-4' pad="medium" >
        <Heading>
            Akil
        </Heading>
        Her konuda en uzman insanlarla yuz yuze gorusme sansi
    </Article>

    
    {data.loading ? <Spinning/> : <MentorList mentors={data.allMentors}/>}
</Box>

const ALL_MENTORS = gql`
    query {
        allMentors {
            id, 
            name, 
            description
        }
    }
`;

export default graphql(ALL_MENTORS)(MainPage);