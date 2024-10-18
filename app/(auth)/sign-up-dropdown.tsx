import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useRouter} from "expo-router";
import {UserContext} from "@/app/UserContext";
import {postSignUpDetails} from "@/services/authService";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
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
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});