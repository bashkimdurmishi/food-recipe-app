import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../constants";
import DropDownWithArrowCardStyles from "./styles/DropDownWithArrowCardStyles";

const DropDownWithArrowCard = (props: any): JSX.Element => {
  const [showDetails, setShowDetails] = useState(false);
  const arrowIconRotation = showDetails ? "90deg" : "0deg";
  return (
    <View
      style={{
        ...DropDownWithArrowCardStyles.container,
        ...props.style,
      }}
    >
      <View style={DropDownWithArrowCardStyles.header}>
        <Text style={DropDownWithArrowCardStyles.title}>{props.title}:</Text>

        <TouchableOpacity
          style={DropDownWithArrowCardStyles.button}
          onPress={() => setShowDetails(!showDetails)}
        >
          <Image
            source={icons.dropdown_arrow}
            style={{
              transform: [{ rotate: arrowIconRotation }],
              ...DropDownWithArrowCardStyles.icon,
            }}
          />
        </TouchableOpacity>
      </View>

      {showDetails && <View style={{ marginTop: 10 }}>{props.renderItem}</View>}
    </View>
  );
};

export default DropDownWithArrowCard;
