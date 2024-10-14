import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Assuming you're using Expo Router
import { UserContext } from '../UserContext';
import { postSignUpDetails } from "@/services/authService";
import { useContext, useState } from "react";

// modify the hooks for a single json
const SignUp = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        birthdate: '',
        bloodgroup: '',
        gender: '',
        data: ''
    });
    const [err, setErr] = useState('');
    const { updateUser } = useContext(UserContext);
    const handleTextChange = (field: any, value: any) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSignUp = async () => {
        console.log("Sign up button pressed");
        console.log("Form Data:", formData);
        try{
            const response = await postSignUpDetails(formData);
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
                    value={formData.name}
                    onChangeText={(text)=>handleTextChange('name', text)}
                />
                
                {/* Username Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Username"
                    placeholderTextColor="gray"
                    keyboardType="default"
                    value={formData.username}
                    onChangeText={(text)=>handleTextChange('username', text)}
                />

                {/* Gmail Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Gmail"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    value={formData.email}
                    onChangeText={(text)=>handleTextChange('email', text)}
                />

                {/* Password Input */}
                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text)=>handleTextChange('password', text)}
                />

                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Gender"
                    placeholderTextColor="gray"
                    value={formData.gender}
                    onChangeText={(text)=>handleTextChange('gender', text)}
                />

                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Blood Group"
                    placeholderTextColor="gray"
                    value={formData.bloodgroup}
                    onChangeText={(text)=>handleTextChange('bloodgroup', text)}
                />

                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Birthdate"
                    placeholderTextColor="gray"
                    value={formData.birthdate}
                    onChangeText={(text)=>handleTextChange('birthdate', text)}
                />

                <TextInput
                    className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400"
                    placeholder="Data"
                    placeholderTextColor="gray"
                    value={formData.data}
                    onChangeText={(text)=>handleTextChange('data', text)}
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
