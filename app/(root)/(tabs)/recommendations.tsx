import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock function to simulate generative AI response
const generateAIResponse = (category: string, userInput: string) => {
    switch (category) {
        case "Diet":
            return `Based on your input, we suggest a diet rich in proteins, whole grains, and leafy greens for better mental health. Drink plenty of water. You mentioned: ${userInput}`;
        case "Lifestyle":
            return `To improve your lifestyle, focus on mindfulness practices and maintaining a balanced work-life schedule. Stay connected with loved ones. You mentioned: ${userInput}`;
        case "Exercise":
            return `For better mental and physical health, engage in 30 minutes of moderate exercise daily. Activities like yoga or brisk walking are great. You mentioned: ${userInput}`;
        default:
            return "Please select a category and type your input.";
    }
};

const Recommendations = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [userInput, setUserInput] = useState<string>("");
    const [aiResponse, setAIResponse] = useState<string>("");

    const handleGenerateResponse = (category: string) => {
        setSelectedCategory(category);
        const response = generateAIResponse(category, userInput);
        setAIResponse(response);
    };

    return (
        <SafeAreaView className="flex h-full bg-black p-5">
            <ScrollView>
                <View className="flex items-start mb-6">
                    <Text className="text-white text-2xl font-extrabold tracking-wide">
                        Personalized Recommendations
                    </Text>
                    <Text className="text-gray-400 text-md mt-1">
                        Choose a category and ask for suggestions to improve your mental and physical health.
                    </Text>
                </View>

                {/* User Input Field */}
                <TextInput
                    value={userInput}
                    onChangeText={setUserInput}
                    placeholder="Type your message here..."
                    placeholderTextColor="gray"
                    className="bg-gray-800 text-white p-4 mb-6 rounded-lg"
                />

                {/* Buttons for Categories */}
                <View className="flex flex-row justify-between mb-6">
                    <TouchableOpacity
                        onPress={() => handleGenerateResponse("Diet")}
                        className="bg-purple-700 p-4 rounded-lg shadow-md"
                    >
                        <Text className="text-white text-lg font-bold">Diet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleGenerateResponse("Lifestyle")}
                        className="bg-purple-700 p-4 rounded-lg shadow-md"
                    >
                        <Text className="text-white text-lg font-bold">Lifestyle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleGenerateResponse("Exercise")}
                        className="bg-purple-700 p-4 rounded-lg shadow-md"
                    >
                        <Text className="text-white text-lg font-bold">Exercise</Text>
                    </TouchableOpacity>
                </View>

                {/* Display AI Response */}
                <View className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6">
                    <Text className="text-white text-xl font-bold mb-2">
                        {selectedCategory ? `${selectedCategory} Suggestions` : "Your Suggestions"}
                    </Text>
                    <Text className="text-gray-400">{aiResponse || "Please select a category and type your input."}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Recommendations;
