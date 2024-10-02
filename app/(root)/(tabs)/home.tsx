import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Home = () => {
    const router = useRouter();

    const handleSurveyRedirect = () => {
        router.push("/(tabs)/survey"); // Redirects to the survey page in the tabs
    };

    const handleProfileRedirect = () => {
        router.push("/(tabs)/profile"); // Redirects to the profile page
    };

    const handleRecommendationsRedirect = () => {
        router.push("/(tabs)/recommendations"); // Redirects to the recommendations page
    };

    return (
        <SafeAreaView className="flex h-full bg-black p-5">
            <ScrollView>
                {/* Header with Profile Icon */}
                <View className="flex flex-row justify-between items-center mb-6">
                    <Text className="text-white text-2xl font-extrabold tracking-wide">
                        Welcome to MindCare
                    </Text>
                    <TouchableOpacity onPress={handleProfileRedirect}>
                        <Icon name="user" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Welcome Section */}
                <View className="mb-6">
                    <Text className="text-gray-400 text-md mt-1">
                        Your mental health is important to us!
                    </Text>
                </View>

                {/* Take Survey Card */}
                <TouchableOpacity
                    onPress={handleSurveyRedirect}
                    className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6"
                >
                    <Text className="text-white text-xl font-bold mb-2">
                        Take Survey
                    </Text>
                    <Text className="text-gray-400">
                        Answer some questions to assess your mental health and receive personalized advice.
                    </Text>
                </TouchableOpacity>

                {/* Reminder Section */}
                <View className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6">
                    <Text className="text-white text-xl font-bold mb-2">
                        Today's Reminders
                    </Text>
                    <Text className="text-gray-400">
                        • Practice mindfulness for 10 minutes.{"\n"}
                        • Meditate before bed.{"\n"}
                        • Drink 8 glasses of water.
                    </Text>
                </View>

                {/* Mindfulness Tips Section */}
                <View className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6">
                    <Text className="text-white text-xl font-bold mb-2">
                        Mindfulness Tips
                    </Text>
                    <Text className="text-gray-400">
                        Explore mindfulness practices to improve your mental well-being.
                    </Text>
                </View>

                {/* Daily Check-In Section */}
                <View className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6">
                    <Text className="text-white text-xl font-bold mb-2">
                        Daily Check-In
                    </Text>
                    <Text className="text-gray-400">
                        Track your mood and thoughts daily for better self-awareness.
                    </Text>
                </View>

                {/* Customized Recommendations Card */}
                <TouchableOpacity
                    onPress={handleRecommendationsRedirect}
                    className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6"
                >
                    <Text className="text-white text-xl font-bold mb-2">
                        Customized Recommendations
                    </Text>
                    <Text className="text-gray-400">
                        Get personalized lifestyle habits and mental health advice tailored to you.
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
