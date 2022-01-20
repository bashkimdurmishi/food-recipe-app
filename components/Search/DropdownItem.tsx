import { Picker } from "@react-native-community/picker";
import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../../constants";
import DropdownItemStyles from "./styles/DropdownItemStyles";
const DropdownItem = (props: any): JSX.Element => {
  return (
    <View style={DropdownItemStyles.container}>
      <Text style={DropdownItemStyles.title}>{props.title}</Text>
      <Picker
        selectedValue={props.value}
        onValueChange={(item) => props.onValueChange(item)}
        style={DropdownItemStyles.title}
      >
        <Picker.Item label="None" value="None" />
        {props.filters.map((value: string, index: number) => {
          return <Picker.Item key={index} label={value} value={value} />;
        })}
      </Picker>
    </View>
  );
};

export default DropdownItem;
