import React from 'react';
import UserProfile from "../components/UserProfile";
import Setuser from "../components/Setuser";

const InfoPage = () => {

    const image = 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=400'

    return (
        <div style={{ heigth: '100px', backgroundImage: `url(${image})`, backgroundColor: 'blue' }}>
            <UserProfile />
            <Setuser />
            <Setuser />

        </div>
    );
};

export default InfoPage;