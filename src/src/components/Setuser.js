import React, { useContext } from 'react';
import MainContext from "../context/MainContext";

const Setuser = () => {
    const { user, setUser, color, } = useContext(MainContext)

    return (
        <div>
            <h1 style={{ backgroundColor: color }}>{color}</h1>
            <button onClick={() => setUser("Tomas")}>SET NEW USER</button>

        </div>
    );
};

export default Setuser;