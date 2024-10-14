import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {UserProvider} from "@/app/UserContext";

const Home = ()=>{
    return (
        <UserProvider>
        <Redirect href="/(auth)/welcome" />
        </UserProvider>
    );
};

export default Home;