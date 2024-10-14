import React, { createContext, useState } from 'react';

// Create the User Context
export const UserContext = createContext();

// Create a UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); // Global state for user details

    // Function to update user details
    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
