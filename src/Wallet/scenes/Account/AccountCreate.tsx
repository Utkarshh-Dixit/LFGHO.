import * as React from 'react';

const AccountCreate:React.FC = () => {
    const createAccount = () => {
        console.log('createAccount');
    }
    return (
        <div>
            <button onClick={createAccount}>Create Account</button>
        </div>
    )
};

export default AccountCreate;