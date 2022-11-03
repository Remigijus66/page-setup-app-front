import {useContext} from 'react';
import MainContext from "../context/MainContext";

const UserProfile = () => {

    const {user, setUser} = useContext(MainContext)

    return (
        <div>
            <h1>user info</h1>
            <h1>{user}</h1>
        </div>
    );
};

export default UserProfile;