import { TextInput, StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView, Platform } from "react-native";

export default function HomeScreen({ navigation }) {
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        
            <View style={styles.imageCont}>
                <Image source={require('../assets/home-image.jpg')} style={{width: "100%",
        height: "100%"}}/>
            </View>

            <View style={styles.title}>
                <Text style={styles.Welcome}>Welcome to Locapic</Text>
            </View>

            <View style={styles.inputCont}>
                <TextInput placeholder="Nickname"/>
            </View>
            
            <TouchableOpacity style={styles.Button} title="Go to map" onPress={() => navigation.navigate("TabNavigator")}> 
                <Text>Go to map</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    imageCont: {
        flex: 8,
        backgroundColor: "green",
    },
    title: {
        flex: 3,
        justifyContent: 'center'
    },
    Welcome: {
        fontSize: 60,
        fontWeight: 'bold',
        paddingRight: 25,
    },
    inputCont:{
        flex: 1,
        justifyContent: "flex-end",
        margin: 10,
        marginTop: 25,
        borderBottomColor: '#ec6e5b',
        borderBottomWidth: 1,
    },
    Button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ec6e5b',
        margin: 10,
        marginTop: 10,
        marginBottom: 40,
        borderRadius: 5,
    }
})