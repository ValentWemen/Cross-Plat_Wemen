import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Avatar, Card, Icon, Searchbar, Text } from "react-native-paper";
import { useState } from "react";
import styles from "../styles/AppStyles";
import userData from "../data.json";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Screen Name */}
      <Stack.Screen options={{ title: "User List" }} />

      <Searchbar
        placeholder="Cari pengguna..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <ScrollView contentContainerStyle={styles.container}>
        {filteredUsers.map((users, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Image
                size={75}
                source={{ uri: users.photo_url }}
              />
              <View style={styles.userInfo}>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text>{users.email}</Text>
                <View style={styles.iconRow}>
                  <Icon source="email" size={16} color="gray" />
                  <Icon source="phone" size={16} color="gray" />
                  <Icon source="account" size={16} color="gray" />
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </>
  );
}