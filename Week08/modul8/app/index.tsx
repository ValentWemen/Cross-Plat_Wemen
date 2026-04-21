import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getPosts } from "../services/api";

export default function Index() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    setLoading(true);
    getPosts()
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data);
          console.log(res.data);
        } else {
          console.log("error");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📋 All Posts</Text>
        <Pressable
          style={styles.addButton}
          onPress={() => router.push({ pathname: "/addPost" })}
        >
          <Text style={styles.addButtonText}>+ Add New Post</Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#4F46E5"
          style={{ marginTop: 40 }}
        />
      ) : (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {posts.map((post) => (
            <Pressable
              key={post.id}
              style={({ pressed }) => [
                styles.postCard,
                pressed && styles.postCardPressed,
              ]}
              onPress={() =>
                router.push({
                  pathname: "/postDetail",
                  params: {
                    id: post.id,
                    userId: post.userId,
                  },
                })
              }
            >
              <View style={styles.postNumberBadge}>
                <Text style={styles.postNumberText}>#{post.id}</Text>
              </View>
              <Text style={styles.postTitle} numberOfLines={2}>
                {post.title}
              </Text>
              <Text style={styles.postBody} numberOfLines={3}>
                {post.body}
              </Text>
              <Text style={styles.readMore}>Read more →</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },
  header: {
    backgroundColor: "#4F46E5",
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#4F46E5",
    fontWeight: "700",
    fontSize: 13,
  },
  listContainer: {
    padding: 16,
    gap: 12,
  },
  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#4F46E5",
  },
  postCardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  postNumberBadge: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  postNumberText: {
    color: "#4F46E5",
    fontWeight: "700",
    fontSize: 12,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E1B4B",
    marginBottom: 6,
    textTransform: "capitalize",
  },
  postBody: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },
  readMore: {
    color: "#4F46E5",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "right",
  },
});
