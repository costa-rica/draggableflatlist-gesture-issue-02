import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { useState, useCallback } from "react";

import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

const initialData = [
  { key: "1", label: "Item 1", backgroundColor: "#ef4444" },
  { key: "2", label: "Item 2", backgroundColor: "#22c55e" },
  { key: "3", label: "Item 3", backgroundColor: "#3b82f6" },
  { key: "4", label: "Item 4", backgroundColor: "#eab308" },
  { key: "5", label: "Item 5", backgroundColor: "#a855f7" },
];

export default function App() {
  // define a simple tap gesture
  const tapGesture = Gesture.Tap().onStart((event) => {
    console.log("Tap detected 👆");
    alert("Tap detected 👆");
  });

  // -- DraggableFlatList
  const [data, setData] = useState(initialData);

  const renderItem = useCallback(({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag} // 👈 hold to start dragging
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "#9ca3af" : item.backgroundColor },
          ]}
          activeOpacity={0.8}
        >
          <Text style={styles.text}>{item.label}</Text>
          <Text style={styles.hint}>Long-press & drag ↕</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.vwGestureHandler}>
        <GestureDetector gesture={tapGesture}>
          <View style={styles.vwGestureHandler}></View>
        </GestureDetector>
      </View>
      <View style={styles.vwDragabbleFlatList}>
        <Text style={styles.title}>DraggableFlatList demo</Text>
        <DraggableFlatList
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          onDragEnd={({ data }) => setData(data)} // 👈 updates order after drop
          // Optional niceties:
          activationDistance={0} // start on long-press by default
          autoscrollSpeed={50}
          autoscrollThreshold={50}
          containerStyle={styles.listContainer}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  vwGestureHandler: {
    flex: 1,
    backgroundColor: "blue",
  },
  vwDragabbleFlatList: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "600",
  },
  listContainer: {
    flex: 1, // 👈 let the FlatList fill available space
  },
  listContent: {
    paddingBottom: 24,
  },
  rowItem: {
    height: 72,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    // Keep it simple: no absolute positioning, no complex nesting
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  hint: {
    color: "white",
    opacity: 0.8,
    fontSize: 12,
    marginTop: 4,
  },
});
