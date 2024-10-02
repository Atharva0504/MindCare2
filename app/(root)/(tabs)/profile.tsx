import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Profile = () => {
    const router = useRouter();

    const handleEditProfile = () => {
        // Logic to navigate to the Edit Profile page or handle profile editing
        router.push("/(tabs)/edit-profile");
    };

    return (
        <SafeAreaView className="flex h-full bg-black p-5">
            <View className="flex items-center mb-6">
                <Image
                    source={{ uri: "https://www.example.com/profile-picture.jpg" }} // Replace with actual profile picture URL
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text className="text-white text-2xl font-extrabold mt-4">
                    Arya Alurkar
                </Text>
                <Text className="text-gray-400 text-md">
                    arya.alurkar@example.com
                </Text>
            </View>

            <View className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6">
                <Text className="text-white text-xl font-bold mb-2">
                    Profile Details
                </Text>
                <Text className="text-gray-400 mb-2">
                    Name: Arya Alurkar
                </Text>
                <Text className="text-gray-400 mb-2">
                    Username: arya_alurkar
                </Text>
                <Text className="text-gray-400 mb-2">
                    Email: arya.alurkar@example.com
                </Text>
            </View>

            <TouchableOpacity
                className="bg-purple-600 py-3 px-7 rounded-full shadow-md shadow-purple-700"
                onPress={handleEditProfile}
            >
                <Text className="text-white text-lg font-bold">
                    Edit Profile
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Profile;
