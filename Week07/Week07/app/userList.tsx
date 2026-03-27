import { Link, Stack } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import Animated, { FadeInRight } from "react-native-reanimated";
import styles from "../styles/AppStyles";
import userData from "../data.json";

export default function userList() {
  return (
    <>
      <Stack.Screen options={{ title: "userList" }} />
      <ScrollView contentContainerStyle={styles.container}>
        {userData.map((users, index) => (
          <Animated.View key={index} entering={FadeInRight.delay(index * 200)}>
            <Card style={styles.card}>
              <Link
                href={{
                  pathname: "/profile",
                  params: {
                    userName: users.name,
                    userEmail: users.email,
                    userPhoto: users.photo_url,
                    userPhone: users.phone,
                    userAddress: users.address,
                  },
                }}
                push
                asChild
              >
                <TouchableOpacity>
                  <Card.Content style={styles.cardContent}>
                    <Avatar.Image size={70} source={{ uri: users.photo_url }} />
                    <View style={styles.textContainer}>
                      <Text variant="titleMedium" style={{ color: "#fff" }}>
                        {users.name}
                      </Text>
                      <Text variant="bodyMedium" style={{ color: "#aaa" }}>
                        {users.email}
                      </Text>
                    </View>
                  </Card.Content>
                </TouchableOpacity>
              </Link>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>
    </>
  );
}
