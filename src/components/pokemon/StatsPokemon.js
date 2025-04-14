import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalizeFirstLetter } from "../../utils/TextUtils";
import getColorByType from "../../utils/ColorUtils";

export default function Stats(props) {
  const { stats, type } = props;

  const barStyles = (num) => {
    return {
      backgroundColor: getColorByType(type),
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      <View style={styles.stats}>
        {stats.map((item) => (
          <View key={item.stat.name} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>
                {capitalizeFirstLetter(item.stat.name)}
              </Text>
            </View>
            <View style={styles.blockInfo}>
              <View style={styles.bgBar}>
                <View style={[styles.bar, barStyles(item.base_stat)]} />
              </View>
              <Text style={styles.number}>{item.base_stat}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    marginLeft: 15,
  },
  stats: {
    backgroundColor: "#ededed",
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
    alignContent: "center",
    alignItems: "center",
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 13,
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    marginLeft: 10,
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    // backgroundColor: "red",
    // width: "40%",
    height: 5,
    borderRadius: 20,
  },
});
