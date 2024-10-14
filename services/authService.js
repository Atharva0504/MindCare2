import api from "./apiService";
import axios from "axios";

// Example function to get survey questions
export const postSignInDetails = async ({username, password}) => {
    try {
        const response = await api.post('auth/signin', {username, password}); // Adjust endpoint as needed
        if(response.data.success){
            return ({
                success: true,
                user: response.data.user
            });
        }
        else{
            return ({
                success: false,
                user: null,
                message: response.data.message || "Sign-in failed. Please try again.",
            });
        }
    } catch (error) {
        console.error("Error in API call", error);
        return {
            success: false,
            user: null,
            message: "Unknown error occurred. Please try again.",
        }
    }
};


export const postSignInDetailsTemp = async ({ username, password }) => {
    const params = new URLSearchParams(); // Initialize URLSearchParams
    params.append('username', username);
    params.append('password', password);
    console.log(api);
    console.log("Username: ", username);
    console.log("Password: ", password);

    const response = await axios.post('http://192.168.1.5:8080/java/api/auth/login_page',
        params, // Send the URL-encoded form data
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Explicitly set the Content-Type
            },
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            return {
                success: false,
                user: null,
                message: 'Sign-in failed. Please try again.',
            };
        });
    if (response.status === 200) {
        return {
            success: true,
            user: response.data,
        };
    } else {
        return {
            success: false,
            user: null,
            message: 'Sign-in failed. Please try again.',
        };
    }

};

export const postSignUpDetails = async(userDetails) => {
    try {
        const response = await api.post('auth/signup', userDetails); // Adjust endpoint as needed
        if(response.status === 200){
            return ({
                success: true,
                user: response.data
            });
        }
        else if (response.status === 400){
            return ({
                success: false,
                user: null,
                message: response.data.desc || "Sign-up failed. Please try again.",
            });
        }
        else{
            return (
                {
                    success: false,
                    user: null,
                    message: "Sign-up failed due to unknown error. Please try again.",
                }
            );
        }
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
        return {
            success: false,
            user: null,
            message: 'Sign-up failed. Please try again.',
        };
    }
};