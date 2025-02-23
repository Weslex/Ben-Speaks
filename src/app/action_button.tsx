import React, { useEffect, useMemo } from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import * as Speech from "expo-speech";
import PlussignSVG from "@/assets/icons/plussvg";
import speechButton from "./models/speech-button";
import { router } from "expo-router";
import TrashSvg from "@/assets/icons/trashSvg";
import { deleteSpeechButton } from "./services/database-service";

type Props = {
  item: speechButton;
  editMode?: boolean;
  onItemDeleted(id: number): void;
};
const Actionbutton = ({ item, onItemDeleted, editMode = false }: Props) => {
  let base64String: string = "";
  let dataUri: string = "";
  const speak = () => {
    Speech.speak(item.speech_phrase);
  };

  if (item.image !== null) {
    dataUri = `data:image/jpeg;base64,${item.image}`;
  }

  const navigateToEdit = () => {
    router.push({ pathname: "/edit", params: { id: item.id } });
  };

  const deleteSpeechButtonAfterConfirmation = async () => {
    Alert.alert(
      "Delete Confirmation",
      `You are about to delete the ${item.label} speech button, are you sure you want to delete this?`,
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            deleteSpeechButton(item.id);
            onItemDeleted(item.id);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => (!editMode ? speak() : navigateToEdit())}
      >
        {dataUri !== "" ? (
          <Image
            source={{ uri: dataUri }}
            style={{ width: 125, height: 125, alignSelf: "center" }}
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>
      <View style={{ flexDirection: "row", padding: 10 }}>
        {editMode ? (
          <TouchableOpacity
            onPress={() => deleteSpeechButtonAfterConfirmation()}
            style={styles.deleteBtn}
          >
            <TrashSvg />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
    bottom: 55,
    left: 0,
  },
  touchable: {
    backgroundColor: "#99f18a",
    width: 125,
    height: 125,
    justifyContent: "center", // Centers content within the button
    alignItems: "center", // Centers content within the button
  },
  text: {
    textAlign: "center",
    textDecorationStyle: "double",
    fontSize: 15, // Adjusted font size for visibility
    marginLeft: 10,
  },
  image: {
    height: "70%", // Adjust height to fit inside the button (scaling)
    width: "70%", // Adjust width to fit inside the button (scaling)
    resizeMode: "contain", // Ensures the image scales uniformly inside the container
  },
  deleteBtn: {
    justifyContent: "flex-start",
  },
});

export default Actionbutton;
