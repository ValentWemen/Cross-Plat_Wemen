import { postData } from "@/services/api";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // Validasi input
    if (!title.trim() || !body.trim() || !userId.trim()) {
      Alert.alert(
        "Validation Error",
        "Please fill in all fields before submitting.",
      );
      return;
    }

    if (isNaN(Number(userId)) || Number(userId) <= 0) {
      Alert.alert(
        "Validation Error",
        "User ID must be a valid positive number.",
      );
      return;
    }

    setLoading(true);

    postData({
      title: title.trim(),
      body: body.trim(),
      userId: Number(userId),
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("Post created:", res.data);
          Alert.alert(
            "Success! 🎉",
            `Post "${res.data.title}" has been created with ID: ${res.data.id}`,
            [
              {
                text: "Back to Home",
                onPress: () => router.back(),
              },
            ],
          );
        } else {
          Alert.alert("Error", "Failed to create post. Please try again.");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        Alert.alert("Error", "Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Banner */}
        <View style={styles.heroBanner}>
          <Text style={styles.heroEmoji}>📝</Text>
          <Text style={styles.heroTitle}>Create New Post</Text>
          <Text style={styles.heroSubtitle}>
            Share your thoughts with everyone
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Title Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Post Title</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter an interesting title..."
              placeholderTextColor="#C4C4C4"
              value={title}
              onChangeText={setTitle}
              maxLength={100}
            />
            <Text style={styles.charCount}>{title.length}/100</Text>
          </View>

          {/* Body Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Post Body</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder="Write your post content here..."
              placeholderTextColor="#C4C4C4"
              value={body}
              onChangeText={setBody}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              maxLength={500}
            />
            <Text style={styles.charCount}>{body.length}/500</Text>
          </View>

          {/* User ID Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>User ID</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. 1"
              placeholderTextColor="#C4C4C4"
              value={userId}
              onChangeText={setUserId}
              keyboardType="numeric"
              maxLength={5}
            />
            <Text style={styles.inputHint}>
              * Enter a valid user ID (1–10 for JSONPlaceholder)
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            {/* Cancel Button */}
            <Pressable
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleCancel}
              disabled={loading}
            >
              <Text style={styles.cancelButtonText}>✕ Cancel</Text>
            </Pressable>

            {/* Submit Button */}
            <Pressable
              style={({ pressed }) => [
                styles.submitButton,
                pressed && styles.buttonPressed,
                loading && styles.buttonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.submitButtonText}>✓ Submit Post</Text>
              )}
            </Pressable>
          </View>
        </View>

        {/* Info Note */}
        <View style={styles.infoNote}>
          <Text style={styles.infoNoteText}>
            ℹ️ This uses JSONPlaceholder API. The created post won't actually be
            saved permanently, but the API will return a response as if it did.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },
  content: {
    padding: 16,
    gap: 16,
    paddingBottom: 40,
  },
  heroBanner: {
    backgroundColor: "#4F46E5",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  heroEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.75)",
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  inputGroup: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#374151",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  textInput: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#1E1B4B",
  },
  textArea: {
    height: 130,
    paddingTop: 12,
  },
  charCount: {
    fontSize: 11,
    color: "#9CA3AF",
    textAlign: "right",
  },
  inputHint: {
    fontSize: 11,
    color: "#9CA3AF",
    fontStyle: "italic",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "#6B7280",
    fontWeight: "700",
    fontSize: 15,
  },
  submitButton: {
    flex: 2,
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  infoNote: {
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: "#4F46E5",
  },
  infoNoteText: {
    fontSize: 12,
    color: "#4338CA",
    lineHeight: 18,
  },
});
