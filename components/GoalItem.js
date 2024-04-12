import { StyleSheet, View, Text, Pressable } from "react-native";
//Pressable make component pressable

function GoalItem(props) {
  // bind method method creates a new function that, when called,
  // calls this function with its this keyword set to the provided value,
  // and a given sequence of arguments preceding any provided when the new function is called.
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210000" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e4aaa",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
