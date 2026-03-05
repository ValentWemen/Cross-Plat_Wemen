import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "../styles/AppStyles";

export default function profile() {
  const { userName, userEmail, userPhoto, userPhone, userAddress } =
    useLocalSearchParams<{
      userName: string;
      userEmail: string;
      userPhoto: string;
      userPhone: string;
      userAddress: string;
    }>();

  return (
    <>
      <Stack.Screen options={{ title: "profile" }} />
      <View style={styles.profileContainer}>
        <Avatar.Image size={100} source={{ uri: userPhoto }} />
        <Text style={styles.profileName}>{userName}'s Profile</Text>
        <Text style={styles.profileEmail}>{userEmail}</Text>
        <Text style={styles.profilePhone}>{userPhone}</Text>
        <Text style={styles.profileAddress}>{userAddress}</Text>

        <Link href="/home" push asChild>
          <Button title="Go to Home Screen" />
        </Link>
      </View>
    </>
  );
}