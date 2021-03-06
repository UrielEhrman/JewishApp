import { StyleSheet } from "react-native";
import { Metric, Colors } from "../../themes";

export const styles = StyleSheet.create({
  eventCardContainer: {
    width: 320,
    height: 200,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-around"
  },
  torahImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: Colors.torah,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  torahImage: { width: 46, height: 46, resizeMode: "contain" },
  eventUserContainer: { height: 80, flexDirection: "row", marginRight: 5 },
  eventUserAvatar: { width: 40, height: 40, resizeMode: "contain" },
  eventUserDetail: { height: 40, justifyContent: "center", marginLeft: 5 },
  eventUserRole: { color: "white", fontSize: 12 },
  eventUserName: { color: "white", fontSize: 14 },
  eventUserLine: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  eventTitle: { color: "white", fontSize: 18 },
  eventTimeView: { marginTop: 10, flexDirection: "row" },
  eventTimeText: { color: Colors.eventCardText, fontSize: 13, marginLeft: 3 },
  eventLocationImage: {
    width: 12,
    height: 16,
    resizeMode: "contain",
    marginLeft: 10
  },
  eventTimeImage: { width: 16, height: 16, resizeMode: "contain" },
  lessonCardContainer: {
    width: 280,
    height: 120,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "lightgray",
    padding: 5,
    flexDirection: "row"
  },
  lessonImageView: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.primary
  },
  lessonCardImage: { width: 55, height: 55, resizeMode: "contain" },
  lessonDetailView: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: "space-around"
  },
  lessonRoleText: { fontSize: 11, color: Colors.lessonLightText },
  lessonTitleText: { fontSize: 16, color: "black" },
  lessonLocationText: { fontSize: 13, color: Colors.lessonLightText },
  lessonLocationImage: { width: 14, height: 18, resizeMode: "contain" },
  lessonLocationImageView: { flexDirection: "row", alignItems: "center" },
  lessonCalendarImage: { width: 14, height: 14, resizeMode: "contain" },
  lessonCalendarImageView: { flexDirection: "row", alignItems: "center" },
  lessonLikeImage: { width: 14, height: 12, resizeMode: "contain" },
  lessonLikeImageView: { flexDirection: "row", alignItems: "center" }
});
