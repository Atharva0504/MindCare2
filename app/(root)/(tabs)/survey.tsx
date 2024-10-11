import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {submitSurveyAnswers} from "@/services/surveyService";

const Survey = () => {
    const [answers, setAnswers] = useState({});
    const [survey, setSurvey] = useState({});
    const handleAnswer = (questionId: number, answer: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleSubmit = async () => {
        try {
            await submitSurveyAnswers(answers, survey.id); // Submit the answers
            console.log("Survey submitted successfully!");
            // Optionally show a confirmation message or redirect
        } catch (error) {
            console.error("Failed to submit answers:", error);
        }
        console.log("Survey answers:", answers);
        // You can redirect or show a confirmation message after submission
    };

    return (
        <SafeAreaView className="flex h-full bg-black p-5">
            <ScrollView>
                <View className="mb-6">
                    <Text className="text-white text-2xl font-extrabold tracking-wide">
                        Mental Health Survey
                    </Text>
                    <Text className="text-gray-400 text-md mt-1">
                        Please answer the following questions.
                    </Text>
                </View>

                {/* Question 1 */}
                <View className="mb-4">
                    <Text className="text-white text-lg font-bold mb-2">
                        1. How often do you feel stressed?
                    </Text>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[1] === "Often" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(1, "Often")}
                    >
                        <Text className="text-gray-400">Often</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[1] === "Sometimes" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(1, "Sometimes")}
                    >
                        <Text className="text-gray-400">Sometimes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg ${answers[1] === "Rarely" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(1, "Rarely")}
                    >
                        <Text className="text-gray-400">Rarely</Text>
                    </TouchableOpacity>
                </View>

                {/* Question 2 */}
                <View className="mb-4">
                    <Text className="text-white text-lg font-bold mb-2">
                        2. Do you have trouble sleeping?
                    </Text>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[2] === "Yes" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(2, "Yes")}
                    >
                        <Text className="text-gray-400">Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg ${answers[2] === "No" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(2, "No")}
                    >
                        <Text className="text-gray-400">No</Text>
                    </TouchableOpacity>
                </View>

                {/* Question 3 */}
                <View className="mb-4">
                    <Text className="text-white text-lg font-bold mb-2">
                        3. How often do you feel overwhelmed by your daily tasks?
                    </Text>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[3] === "Very Often" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(3, "Very Often")}
                    >
                        <Text className="text-gray-400">Very Often</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[3] === "Sometimes" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(3, "Sometimes")}
                    >
                        <Text className="text-gray-400">Sometimes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg ${answers[3] === "Rarely" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(3, "Rarely")}
                    >
                        <Text className="text-gray-400">Rarely</Text>
                    </TouchableOpacity>
                </View>

                {/* Question 4 */}
                <View className="mb-4">
                    <Text className="text-white text-lg font-bold mb-2">
                        4. Do you feel like you have a good support system?
                    </Text>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[4] === "Yes" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(4, "Yes")}
                    >
                        <Text className="text-gray-400">Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg ${answers[4] === "No" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(4, "No")}
                    >
                        <Text className="text-gray-400">No</Text>
                    </TouchableOpacity>
                </View>

                {/* Question 5 */}
                <View className="mb-4">
                    <Text className="text-white text-lg font-bold mb-2">
                        5. How would you rate your current mood?
                    </Text>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[5] === "Excellent" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(5, "Excellent")}
                    >
                        <Text className="text-gray-400">Excellent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[5] === "Good" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(5, "Good")}
                    >
                        <Text className="text-gray-400">Good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg mb-2 ${answers[5] === "Fair" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(5, "Fair")}
                    >
                        <Text className="text-gray-400">Fair</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`bg-gray-800 p-4 rounded-lg ${answers[5] === "Poor" && "border border-purple-600"}`}
                        onPress={() => handleAnswer(5, "Poor")}
                    >
                        <Text className="text-gray-400">Poor</Text>
                    </TouchableOpacity>
                </View>

                {/* Submit Button */}
                <View className="w-full items-center mt-10">
                    <TouchableOpacity
                        className="bg-purple-600 py-3 px-7 rounded-full shadow-md shadow-purple-700"
                        onPress={handleSubmit}
                    >
                        <Text className="text-white text-lg font-bold">
                            Submit Survey
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Survey;
