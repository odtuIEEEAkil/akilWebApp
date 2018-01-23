import React from 'react';
import {preloadScript, OTSession, OTPublisher, OTStreams, OTSubscriber} from 'opentok-react';

class VideoChat extends React.Component {

    constructor() {
        super();
        this.state = {
            isVideoSetUp: false
        }; 
    }
    componentDidMount() {
        fetch("http://localhost:8080/room/session")
            .then(res => res.json())
            .then(res => this.setState({
                ...res,
                isVideoSetUp: true
            }))
            .catch(err => this.setState({isVideoSetUp: false}));
    }
    render() {
        const {isVideoSetUp, apiKey, sessionId, token} = this.state;
        if (!isVideoSetUp) {
            return <div>Video Not Setup</div>
        }

        return (
            <OTSession
                apiKey={apiKey}
                sessionId={sessionId}
                token={token}>
                <OTPublisher/>
                <OTStreams>
                    <OTSubscriber/>
                </OTStreams>
            </OTSession>
        );
    }
}

export default preloadScript(VideoChat);