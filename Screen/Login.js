import React, { useState } from "react";
import { logStyle } from "../styleingComponent/LoginStyle";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DatabaseConnection } from "../Database/Database"; // Import your database connection

const db = DatabaseConnection.getConnection();

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM table_user WHERE email = ? AND password = ?",
        [username, password],
        (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            navigation.navigate("Messages");
          } 
          else {
            Alert.alert("Error", "Invalid username or password.");
          }
        }
      );
    });
  };


  return (
    <View>
      <TextInput
        style={logStyle.logInput}
        placeholder="Enter your Email"
        value={username}
        onChangeText={text => setUsername(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={logStyle.logInput}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={logStyle.NextButton}>Login</Text>
      </TouchableOpacity>
      <Text style={logStyle.condition}>
        If you don't have an account, click on{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={logStyle.conditionSignup}>Signup</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
