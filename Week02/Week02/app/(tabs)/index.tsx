import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222"
      }}
    >

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image 
          source={require('./pp_1.jpg')} 
          style={{ width: 120, height: 120, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Andi Saputra
        </Text>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          00000071234
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image 
          source={require('./pp_2.jpg')} 
          style={{ width: 120, height: 120, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Maria Claudia
        </Text>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          00000075678
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image 
          source={require('./pp_3.jpg')} 
          style={{ width: 120, height: 120, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Jonathan Wijaya
        </Text>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          00000079821
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image 
          source={require('./pp_4.jpg')} 
          style={{ width: 120, height: 120, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Felicia Tan
        </Text>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          00000074567
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image 
          source={require('./pp_5.jpg')} 
          style={{ width: 120, height: 120, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Patre
        </Text>
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          00000070000
        </Text>
      </View>

    </ScrollView>
  );
}