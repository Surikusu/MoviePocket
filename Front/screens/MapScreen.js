import { Image, StyleSheet, Text, View, touchableOpacity } from "react-native";

export default function MapScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Image source={require('../assets/map.jpg')} style={{width: "100%",
        height: "100%"}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})