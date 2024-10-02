import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Assuming you're using Expo Router

const SignUp = () => {
    const router = useRouter();

    const handleSignUp = () => {
        // Logic to handle sign-up (e.g., API call)
        console.log("Sign up button pressed");
    };

    const handleSignInRedirect = () => {
        router.replace("/(auth)/sign-in"); // Replace with the sign-in route
    };

    return (
        <SafeAreaView className="flex h-full bg-black items-center justify-center p-5">
            {/* Sign-Up Form Heading */}
            <View className="flex items-center justify-start w-full mb-10">
                <Text className="text-white text-3xl font-extrabold tracking-wider shadow-lg shadow-purple-700">
                    Create Account
                </Text>
            </View>

            {/* Input Fields */}
            <View className="w-full space-y-4">
                {/* Name Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Full Name"
                    placeholderTextColor="gray"
                    keyboardType="default"
                />
                
                {/* Username Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Username"
                    placeholderTextColor="gray"
                    keyboardType="default"
                />

                {/* Gmail Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Gmail"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                />

                {/* Password Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                />
            </View>

            {/* Sign Up Button */}
            <View className="w-full items-center mt-10">
                <TouchableOpacity
                    className="bg-purple-600 py-3 px-7 rounded-full shadow-md shadow-purple-700"
                    onPress={handleSignUp}
                >
                    <Text className="text-white text-lg font-bold">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Already Have Account Link */}
            <View className="mt-6">
                <Text className="text-gray-400">
                    Already have an account?{' '}
                    <Text className="text-purple-400 font-bold" onPress={handleSignInRedirect}>
                        Sign In
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
