import { MaterialIcons } from "@expo/vector-icons";
import { GestureResponderEvent, Pressable, View, StyleSheet } from "react-native";

interface IProps {
   onPress: ((event: GestureResponderEvent) => void) | null | undefined 
}

export default function CircleButton({ onPress }: IProps) {
    return(
        <View>
            <Pressable onPress={onPress}>
                <MaterialIcons name='add' size={38} color='#25292e'/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd3d',
        borderRadius: 42,
        padding: 3
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff'
    },
})