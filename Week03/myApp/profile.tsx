import { Text, View } from "react-native";

interface iProfile {
  name: string;
  age: number;
}

const Profile = ({ name, age }: iProfile) => {
  return (
    <View style={{ marginBottom: 12, alignItems: "center" }}>
      <Text style={{ fontSize: 16 }}>Halo nama ku, {name}!</Text>
      <Text style={{ fontSize: 16 }}>Umur ku, {age} tahun</Text>
    </View>
  );
};

export default Profile;