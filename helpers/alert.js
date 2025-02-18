import { Alert, Platform } from "react-native";
import { useTheme } from "../constants/theme";

export const createTwoButtonAlert = ({ title, message, successMessage }) => {
    Alert.alert(title, message, [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel', style: Platform.OS === 'ios' ? 'destructive' : 'cancel', },
        { text: successMessage, onPress: () => { console.log('OK Pressed'); return true }, style: Platform.OS === 'ios' ? 'default' : undefined, },
    ]);
}