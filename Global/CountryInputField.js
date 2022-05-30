// React
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
// util
import tw from 'twrnc';

const CountryInputField = ({ country, setCountry }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={tw`w-4/5 my-1 py-4 self-center text-center bg-[#ffffffa6] rounded-lg uppercase text-neutral-800 text-lg tracking-wide shadow-2xl shadow-neutral-900 outline-none`}
        onChangeText={(newText) => setCountry(newText)}
        defaultValue={country}
        autoCapitalize="words"
        placeholder="Enter the country"
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     width: "80%",
//     marginVertical: "0.3rem",
//     paddingVertical: "1rem",
//     alignSelf: "center",
//     textAlign: "center",
//     backgroundColor: "rgba(255, 255, 255, .65)",
//     borderRadius: 8,
//     textTransform: "uppercase",
//     color: "#252525",
//     fontSize: "1.2rem",
//     letterSpacing: 2,
//     shadowColor: "#151515",
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     outlineStyle: "none",
//     fontFamily: "Raleway_800ExtraBold",
//   },
// });

export default CountryInputField;
