import { TextInput, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PlacesScreen({ navigation }) {

        
    const placesData = [
        { name: 'Paris', latitude: 48.859, longitude: 2.347 },
        { name: 'Lyon', latitude: 45.758, longitude: 4.835 },
        { name: 'Marseille', latitude: 43.282, longitude: 5.405 },
    ];

    const places = placesData.map((data,i) => {
        return (<View key={i} style={styles.placeCont}>
            <View style={{flexDirection: "column"}}>
                <Text style={{fontSize: 18}}>{data.name}</Text>
                <Text>LAT : {data.latitude} LON : {data.longitude}</Text>
            </View>
                <FontAwesome name={"trash-o"} size={25} color={'#ec6e5b'}/>
            </View>)
    })

    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:"center", fontWeight:'bold', fontSize:28, margin:50}}>John Doe's places</Text>
            <View style={styles.cont}>
                
                <TextInput placeholder="New city" style={{width:"80%",borderBottomColor: '#ec6e5b',borderBottomWidth: 1, fontSize: 16, height: 23}}/>
                
                <TouchableOpacity style={styles.Button} title="Add" > 
                <Text style={{color:"white"}}>Add</Text>
                </TouchableOpacity>
            
            </View>
            {places}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    placeCont:{
        height: 100,
        alignItems: 'center',
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 15,
        paddingRight: 30,
        marginHorizontal: 25,
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
    },
    cont:{
        height: 80,
        alignItems: 'center',
        backgroundColor: "white",
        padding: 15,
        margin: 10,
        marginHorizontal: 25,
        flexDirection: "row",
        borderRadius: 10
    },
    Button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ec6e5b',
        margin: 10,
        marginTop: 10,
        borderRadius: 7,
        width: 60,
        height: 30
    }
})