
import { useNavigation } from '@react-navigation/native';
import { Pressable, Image, Text, StyleSheet } from 'react-native'

export const Card = ({imageName, text}) => {

    const navigation = useNavigation();
    
    return (
        <Pressable
        onPress={() => navigation.navigate("TodasReceitas")}
        style={styles.card}>
            <img
                style={styles.boi}
                // resizeMode="auto"
                src={`/frontend/src/img/${imageName}`}
            />
            <Text style={{ color: "white" }}>{text}</Text>
        </Pressable>
    );


}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: 5,
        position: "relative",
        borderRadius: 10,
        alignItems: "center",
        width: 112,
        height: 128,
        backgroundColor: "#161A1D",
      },
    
      boi: {
        maxWidth: "60%",
        maxHeight: "60%",
        objectFit: "scale-down"
      }
})
