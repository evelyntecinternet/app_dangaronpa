import { Text, ScrollView, View, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from 'expo-router';

export default function Danganronpa() {
    const listProduct = [
        {
            id: 1,
            title: 'Hajime',
            description: 'Hajime was most likely an only child, his only known family being his two parents and a grandfather who lived in the countryside. Ever since he was a kid, Hajime admired Hopes Peak Academy and dreamed of attending it.',
            image: '../assets/images/hajime.jpg', // URL da imagem de exemplo
        },
        {
            id: 2,
            title: 'Chiaki',
            description: 'Chiaki is the Ultimate Gamer, a talented person that is very good at any game, and even plays the "crappy" ones. She always finds out how to enjoy any genre or game that she plays. She states that the sole goal of playing video games is to have fun, and not to just focus on winning or losing.',
            image: '../assets/images/chiaki.jpg', 
        },
        {
            id: 3,
            title: ' Maki',
            description: 'Maki survived the final execution along with fellow survivors Shuichi and Himiko by hiding under some rubble. She is the first to come out of the rubble and take in her surroundings, Ultimate Academy for Gifted Juveniles had been completely obliterated by K1-B0. ',
            image: '../assets/images/maki.jpg', 
        },
        {
            id: 4,
            title: 'Kirigiri',
            description: 'Kyoko is a stoic, mysterious and intelligent girl who tends to hide her feelings. She usually considered distant and cold and has a calm demeanor.',
            image: '../assets/images/kirigiri.jpg', 
        },
        {
            id: 5,
            title: 'Makoto',
            description: 'Makoto proclaims himself to be a very ordinary person, to the point that he seems a bit insecure about it. He does admit to having one distinguishing feature, that being his unique sense of optimism.',
            image: '../assets/images/makoto.jpg', 
        },
        {
            id: 6,
            title: 'Junko',
            description: 'Above all, Junko was deeply obsessed with despair, having found despair to be the most enjoyable emotion for her, whether it be inflicting despair unto others, or suffering from despair wholeheartedly.',
            image: '../assets/images/junko.jpg', 
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {listProduct.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleProduct}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>                
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
        color: 'black', fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffcbd1',
        borderColor: "#EF007E"
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});



