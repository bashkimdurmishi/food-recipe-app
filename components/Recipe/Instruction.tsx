import React from "react";
import {Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import InstructionStyles from "./styles/InstructionStyles";

const Instruction = (props: any): JSX.Element => {
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text style={InstructionStyles.stepNumberText}>
          Step {props.instruction.number}:
        </Text>
        <Text style={InstructionStyles.stepInstructionText}>
          {props.instruction.step}
        </Text>
      </View>
      <View>
        <View style={InstructionStyles.smallDot} />
        <View style={InstructionStyles.bigDOt} />
        <View style={InstructionStyles.smallDot} />
      </View>
    </View>
  );
};

export default Instruction;
