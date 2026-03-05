import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  card: {
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 10,
    backgroundColor: "#2a2a2a",
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
    justifyContent: "center",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    color: "#222",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    marginBottom: 8,
  },
  profilePhone: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },
  profileAddress: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#f5f5f5",
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
});

export default styles;