import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchbar: {
    margin: 12,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 5,
  },
  card: {
    width: 325,
    marginBottom: 8,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  userInfo: {
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  iconRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
});

export default styles;