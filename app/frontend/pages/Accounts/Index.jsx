import React from 'react';

const Index = ({accounts}) => {
    return (
        <div>
            {accounts.map(account => (account.name))}
        </div>
    );
};

export default Index;