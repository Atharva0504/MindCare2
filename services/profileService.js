import api from "./apiService";

export const postProfileUpdates = async(userDetails) => {
    try {
        const response = await api.post('user/profile', userDetails); // Adjust endpoint as needed
        if(response.status === 200){
            return ({
                success: true,
            });
        }
        else if (response.status === 400){
            return ({
                success: false,
                message: response.data.desc || "Profile update failed. Please try again.",
            });
        }
        else{
            return (
                {
                    success: false,
                    message: "Profile update failed due to unknown error. Please try again.",
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
            message: 'Profile update failed. Please try again.',
        };
    }
};