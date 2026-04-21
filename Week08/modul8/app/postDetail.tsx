import {
  getCommentsByPost,
  getPostDetail,
  getUserDetail,
} from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { userId } = useLocalSearchParams<{ userId: string }>();

  const [user, setUser] = useState<any>(null);
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPostDetailData();
      getUserData();
      getCommentsData();
    }
  }, []);

  const getUserData = () => {
    getUserDetail(Number(userId)).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
        console.log(res.data);
      } else {
        console.log("error");
      }
    });
  };

  const getPostDetailData = () => {
    getPostDetail(Number(id)).then((res) => {
      if (res.status === 200) {
        setPost(res.data);
        console.log(res.data);
      } else {
        console.log("error");
      }
    });
  };

  // TUGAS 2: Get comments by post id
  const getCommentsData = () => {
    getCommentsByPost(Number(id))
      .then((res) => {
        if (res.status === 200) {
          setComments(res.data);
          console.log(res.data);
        } else {
          console.log("error fetching comments");
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={styles.loadingText}>Loading post...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Post Card */}
      <View style={styles.postCard}>
        <View style={styles.postBadge}>
          <Text style={styles.postBadgeText}>Post #{post?.id}</Text>
        </View>
        <Text style={styles.postTitle}>{post?.title}</Text>
        <Text style={styles.postBody}>{post?.body}</Text>
      </View>

      {/* Author Card */}
      <View style={styles.authorCard}>
        <Text style={styles.sectionLabel}>✍️ Post Created By</Text>
        <View style={styles.authorInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0) ?? "?"}
            </Text>
          </View>
          <View>
            <Text style={styles.authorName}>{user?.name}</Text>
            <Text style={styles.authorEmail}>{user?.email}</Text>
          </View>
        </View>
      </View>

      {/* Comments Section - TUGAS 2 */}
      <View style={styles.commentsSection}>
        <Text style={styles.commentsSectionTitle}>
          💬 Comments ({comments.length})
        </Text>
        {comments.length === 0 ? (
          <Text style={styles.noComments}>No comments yet.</Text>
        ) : (
          comments.map((comment) => (
            <View key={comment.id} style={styles.commentCard}>
              <View style={styles.commentHeader}>
                <View style={styles.commentAvatar}>
                  <Text style={styles.commentAvatarText}>
                    {comment.name?.charAt(0)?.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.commentMeta}>
                  <Text style={styles.commentName} numberOfLines={1}>
                    {comment.name}
                  </Text>
                  <Text style={styles.commentEmail}>{comment.email}</Text>
                </View>
              </View>
              <Text style={styles.commentBody}>{comment.body}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FF",
    gap: 12,
  },
  loadingText: {
    color: "#6B7280",
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },
  content: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  postCard: {
    backgroundColor: "#4F46E5",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  postBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 12,
  },
  postBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "capitalize",
    lineHeight: 26,
  },
  postBody: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
    lineHeight: 22,
  },
  authorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 18,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  authorEmail: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },

  // Comments section
  commentsSection: {
    gap: 10,
  },
  commentsSectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1E1B4B",
    marginBottom: 4,
  },
  noComments: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 20,
  },
  commentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: "#A5B4FC",
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  commentAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  commentAvatarText: {
    color: "#4F46E5",
    fontWeight: "800",
    fontSize: 14,
  },
  commentMeta: {
    flex: 1,
  },
  commentName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },
  commentEmail: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 1,
  },
  commentBody: {
    fontSize: 13,
    color: "#4B5563",
    lineHeight: 20,
  },
});
