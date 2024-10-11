import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Assuming you're using Expo Router
import { UserContext } from '../UserContext';
import { postSignUpDetails } from "@/services/authService";
import { useContext, useState } from "react";

// modify the hooks for a single json
const SignUp = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');
    const { updateUser } = useContext(UserContext);

    const handleSignUp = async () => {
        console.log("Sign up button pressed");
        try{
            const response = await postSignUpDetails({username, email, password});
            if(response.success){
                updateUser(response.user);
                router.replace("/(tabs)/home"); // Redirect to home page after successful sign-in
            }
            else {
                setErr(response.message);
            }
        }
        catch (err){
            console.error("Sign up failed", err);
            setErr("Sign up failed due to unknown error.");
        }
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
                    value={username}
                    onChangeText={setUsername}
                />

                {/* Gmail Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Gmail"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
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
                        Sign up
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
