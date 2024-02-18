import React, { useEffect, useState } from "react";
import { sty } from "../styleingComponent/registerStyle";
import {
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { DatabaseConnection } from "../Database/Database";
import { useNavigation } from "@react-navigation/native";

const db = DatabaseConnection.getConnection();

export default function Register() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    if (Password === confirmPassword) {
      db.transaction(tx => {
        // Check if email already exists
        tx.executeSql(
          "SELECT * FROM table_user WHERE email = ?",
          [email],
          (_, resultSet) => {
            if (resultSet.rows.length > 0) {
              // If email already exists, inform the user and prevent registration
              Alert.alert(
                "Error",
                "Email already registered. Please use a different email.",
                [{ text: "Ok", onPress: () => {} }],
                { cancelable: false }
              );
            } 
            else {
              // If email does not exist, proceed with registration
              tx.executeSql(
                "INSERT INTO table_user (email, password) VALUES (?, ?)",
                [email, Password],
                (_, res) => {
                  console.log("Results", res);
                  if (res.rowsAffected > 0) {
                    // Alert user about successful registration
                    Alert.alert(
                      "Success",
                      "User Added Successfully!",
                      [
                        {
                          text: "Ok",
                          onPress: () => {
                            // Navigate to the Login screen after successful registration
                            navigation.navigate("Login");
  
                            // Retrieve and log all data from the table_user table
                            db.transaction(tx => {
                              tx.executeSql(
                                "SELECT * FROM table_user",
                                [],
                                (_, resultSet) => {
                                  console.log("All Users:", resultSet.rows.raw());
                                }
                              );
                            });
                          },
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert("Error trying to register User!!");
                  }
                }
              );
            }
          }
        );
      });
    } 
    else {
      // Alert user about password mismatch
      Alert.alert(
        "Failed",
        "Passwords Don't Match!",
        [
          {
            text: "Ok",
            onPress: () => navigation.navigate("Register"),
          },
        ],
        { cancelable: true }
      );
    }
  };
  
  
  

  return (
    <ScrollView>
      <View>
        <Text style={sty.RegisterText}>Register</Text>
        <TextInput
          style={sty.regInput}
          placeholder="Enter your Email Address"
          autoCapitalize="none"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        <TextInput
          style={sty.regInput}
          placeholder="Create Password"
          secureTextEntry={true}
          value={Password}
          onChangeText={(txt) => setPassword(txt)}
        />
        <TextInput
          style={sty.regInput}
          placeholder="Comfirm  Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(txt) => setConfirmPassword(txt)}
        />

        <TouchableOpacity onPress={handleRegister}>
          <Text style={sty.NextButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
