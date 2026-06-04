import { useSession } from 'next-auth/react';
import React from 'react';

const dashboardMyProfilePage = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            My profile
        </div>
    );
};

export default dashboardMyProfilePage;