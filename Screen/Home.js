import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { styles } from "../styleingComponent/Homestyle";

import { useNavigation } from "@react-navigation/native";

import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { DatabaseConnection } from "../Database/Database";

const db = DatabaseConnection.getConnection();

export default function HomeScreen() {
  const [name, setName] = useState("Jane");
  const navigation = useNavigation();

  useEffect(() => {
    db.transaction((txt) => {
      txt.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (ts, res) => {
          if (res?.rows?.length === 0) {
            ts.executeSql("DROP TABLE IF EXISTS table_user", []);
            ts.executeSql(
              "CREATE TABLE IF NOT EXISTS table_user (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(40) NOT NULL, password VARCHAR(20) NOT NULL)",
              [],
              () => {
                console.log("Table created successfully");
              },
              (error) => {
                console.log("Error creating table: ", error);
              }
            );
          }
        }
      );
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require("../component/ImageComponent/jane.jpg")}
          style={styles.photocover}
        />
      </View>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center" }}>{name} </Text>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}>
          SAN FRANSISCO, CA
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.followjane}> FOLLOW JANE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
        <Text style={styles.message}> MESSAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Images")}>
        <View style={styles.homeImage}>
          <View>
            <Image
              source={require("../component/ImageComponent/beauty1.jpg")}
              style={styles.beaty}
            />
          </View>

          <Image
            source={require("../component/ImageComponent/beauty5.webp")}
            style={styles.beaty}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
