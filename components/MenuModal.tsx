import React from "react";
import { Modal, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import MenuContent from "./MenuContent";

const MenuModal = ({
  isMenuOpen,
  onClose,
}: {
  isMenuOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isMenuOpen}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.menuContainer}>
            <MenuContent />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    height: "100%",
    width: "75%",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
  },
});