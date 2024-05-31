import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = ({ user }) => {
    console.log('User props:', user); // Debugging information

    const chatProps = useMultiChatLogic(
        process.env.REACT_APP_PRIVATE_KEY,
        user.username,
        user.secret
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
};

export default ChatsPage;
