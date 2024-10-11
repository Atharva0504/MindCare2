import api from "./apiService";
import {UserContext} from "@/app/UserContext";
import {useContext} from "react";
const {user} = useContext(UserContext);

export const getSurveyQuestions = async () => {
    try {
        const response = await api.get('questions'); // Adjust endpoint as needed
        return response.data; // Return the data from the response
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error; // Re-throw error for further handling
    }
};

// Example function to submit survey answers
export const submitSurveyAnswers = async (answers, surveyID) => {
    try {
        const response = await api.post('surveys', answers, {
            params: {userID: user.id, surveyID: surveyID}
        }); // Adjust endpoint as needed
        return response.data; // Return the data from the response
    } catch (error) {
        console.error("Error submitting answers:", error);
        throw error; // Re-throw error for further handling
    }
};