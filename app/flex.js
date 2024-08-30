import { View, Text, ScrollView } from "react-native"
import { Image } from "react-native"
export default function Flex() {
    return (
        <ScrollView contentContainerStyle={{ flex:1 }}>
            <View style={{ display: "flex", flexDirection:"column"}}>
            
              <View style={{ alignItems:"center",justifyContent:"center"}}>
              <Text>Ryoko Otonashi</Text>

            </View>
            
            <View style={{flexDirection:"row" }}>
              <View style={{flex:1}}>
                <Image style={{width: 150,height:150}} 
                   source={require("../assets/images/danganronpa.png")}
                />
                </View>
              <View style={{flex:1,justifyContent: "center"}}>

                <Text>
                Ryoko é uma falsa identidade amnésica de Junko Enoshima. Ela foi criada após a Academia do Pico da Tragédia de Esperança.
                </Text>
              </View>
            </View>
            <View style={{ alignItems:"center",justifyContent:"center"}}>
              <Text>Yasuke Matsuda</Text>

            </View>
            
            <View style={{flexDirection:"row" }}>
              <View style={{flex:1}}>
                <Image style={{width: 150,height:150}} 
                   source={require("../assets/images/Yasu.png")}
                />
                </View>
              <View style={{flex:1,justifyContent: "center"}}>

                <Text>
                Apesar de sua pouca idade, ele é um neurologista muito habilidoso e é considerado um neurocirurgião e neurocientista especialista.
                </Text>
              </View>
            </View>
            <View style={{ alignItems:"center",justifyContent:"center"}}>
              <Text>Junko</Text>

            </View>
            
            <View style={{flexDirection:"row" }}>
              <View style={{flex:1}}>
                <Image style={{width: 150,height:150}} 
                   source={require("../assets/images/junko.png")}
                />
                </View>
                
              <View style={{flex:1,justifyContent: "center"}}>

                <Text>
                "Ryoko Otonashi" stops existing, replaced by her original persona. Junko laughs, saying that Ryoko never existed in the first place. 
                </Text>
              </View>
            </View>
            </View>
           
        </ScrollView>
    )
}