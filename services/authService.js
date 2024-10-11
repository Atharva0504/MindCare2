import api from "./apiService";

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


export const postSignInDetailsTemp = async ({username, password}) => {
    try {
        const response = await api.post('auth/signin', {username, password}); // Adjust endpoint as needed
        if(response.data.username){
            return ({
                success: true,
                user: response.data
            });
        }
        else{
            return ({
                success: false,
                user: null,
                message: "Sign-in failed. Please try again.",
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

export const postSignUpDetails = async({username, email,  password}) => {
    try {
        const response = await api.post('auth/signup', {username, email, password}); // Adjust endpoint as needed
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
                message: response.data.message || "Sign-up failed. Please try again.",
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