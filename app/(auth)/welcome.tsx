import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Assuming you're using Expo Router

const Onboarding = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.replace("/(auth)/sign-up"); // Replace with the sign-up route
    };

    return (
        <>
            <SafeAreaView className="flex h-full bg-black items-center justify-between">
                {/* Top Section: Welcome Heading */}
                <View className="flex items-center justify-start w-full pt-16">
                    <Text className="text-white text-3xl font-extrabold tracking-wider shadow-lg shadow-purple-700">
                        Welcome To
                    </Text>
                    <Text className="text-purple-400 text-4xl font-extrabold tracking-wide">
                        MindCare
                    </Text>
                </View>

                {/* Centered Description */}
                <View className="flex items-center justify-center p-5 w-full">
                    <Text className="text-gray-400 text-center text-lg font-medium leading-relaxed">
                        The path to your perfect mental health
                    </Text>
                    <Text className="text-gray-400 text-center text-lg mt-2">
                        is just a tap away.
                    </Text>
                </View>

                {/* Bottom CTA: Get Started Button */}
                <View className="w-full items-center pb-12">
                    <TouchableOpacity
                        className="bg-purple-600 py-3 px-7 rounded-full shadow-md shadow-purple-700"
                        onPress={handleGetStarted}
                    >
                        <Text className="text-white text-lg font-bold">
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Onboarding;
