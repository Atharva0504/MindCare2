import React, {useContext, useState} from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {UserContext} from "@/app/UserContext";
import {postProfileUpdates} from "@/services/profileService"; // Feather icons include pencil and check icons

const ProfileScreen = () => {
    const {user, updateUser} = useContext(UserContext);
    // Initialize user details state with the user data passed as a prop
    const [userDetails, setUserDetails] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        bloodgroup: user.bloodgroup,
        birthdate: user.birthdate,
        gender: user.gender,
        data: user.data,
        password: user.password
    });

    const [isEditing, setIsEditing] = useState(false);

    // Toggle between edit and save mode
    const handleEditProfileToggle = async () => {
        if (isEditing) {
            // Save the profile and make API call when toggling from edit to view mode
            updateUser(userDetails);
            const response = await postProfileUpdates(userDetails);
            if(response.success) Alert.alert('Profile saved!');
            else Alert.alert(response.message);
        }
        setIsEditing(!isEditing); // Toggle edit mode
    };

    // Function to handle changes to user details
    const handleInputChange = (field, value) => {
        setUserDetails(prevState => ({ ...prevState, [field]: value }));
    };

    return (
        <SafeAreaView className="flex h-full bg-black p-5">
            {/* Top-right icon button */}
            <TouchableOpacity
                className="absolute top-5 right-5 bg-purple-600 p-3 rounded-lg shadow-md shadow-purple-700"
                onPress={handleEditProfileToggle}
            >
                <Feather
                    name={isEditing ? 'check' : 'edit'} // Toggle between pencil and check icon
                    size={24}
                    color="white"
                />
            </TouchableOpacity>

            {/* Profile Picture and Username */}
            <View className="flex items-center mb-6">
                <Image
                    source={{ uri: "https://www.example.com/profile-picture.jpg" }} // Replace with actual profile picture URL
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />

                {isEditing ? (
                    // Editable username
                    <TextInput
                        className="text-white text-2xl font-extrabold mt-4"
                        value={userDetails.username}
                        onChangeText={(text) => handleInputChange('username', text)}
                        style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}
                    />
                ) : (
                    // View-only username
                    <Text className="text-white text-2xl font-extrabold mt-4">
                        {userDetails.username}
                    </Text>
                )}

                {isEditing ? (
                    // Editable email
                    <TextInput
                        className="text-gray-400 text-md"
                        value={userDetails.email}
                        keyboardType="email-address"
                        onChangeText={(text) => handleInputChange('email', text)}
                        style={{ color: 'gray', fontSize: 16 }}
                    />
                ) : (
                    // View-only email
                    <Text className="text-gray-400 text-md">
                        {userDetails.email}
                    </Text>
                )}
            </View>

            {/* Profile Details Section */}
            <View className="bg-gray-800 p-6 rounded-lg shadow-md shadow-purple-700 mb-6">
                <Text className="text-white text-xl font-bold mb-2">
                    Profile Details
                </Text>

                {isEditing ? (
                    // Editable name
                    <TextInput
                        className="text-gray-400 mb-2"
                        value={userDetails.name}
                        onChangeText={(text) => handleInputChange('name', text)}
                        style={{ color: 'gray' }}
                    />
                ) : (
                    // View-only name
                    <Text className="text-gray-400 mb-2">
                        Name: {userDetails.name}
                    </Text>
                )}

                {isEditing ? (
                    // Editable blood group
                    <TextInput
                        className="text-gray-400 mb-2"
                        value={userDetails.gender}
                        onChangeText={(text) => handleInputChange('gender', text)}
                        style={{ color: 'gray' }}
                    />
                ) : (
                    // View-only blood group
                    <Text className="text-gray-400 mb-2">
                       Gender : {userDetails.gender}
                    </Text>
                )}

                {isEditing ? (
                    // Editable blood group
                    <TextInput
                        className="text-gray-400 mb-2"
                        value={userDetails.bloodgroup}
                        onChangeText={(text) => handleInputChange('bloodgroup', text)}
                        style={{ color: 'gray' }}
                    />
                ) : (
                    // View-only blood group
                    <Text className="text-gray-400 mb-2">
                        Blood group: {userDetails.bloodgroup}
                    </Text>
                )}

                {isEditing ? (
                    // Editable blood group
                    <TextInput
                        className="text-gray-400 mb-2"
                        value={userDetails.birthdate}
                        onChangeText={(text) => handleInputChange('birthdate', text)}
                        style={{ color: 'gray' }}
                    />
                ) : (
                    // View-only blood group
                    <Text className="text-gray-400 mb-2">
                        Birthdate : {userDetails.birthdate}
                    </Text>
                )}

            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
