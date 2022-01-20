import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../../constants";
import ViewersStyles from "./styles/ViewersStyles";

interface Viewers {
  viewersList: any;
}

const Viewers = ({ viewersList }: Viewers): JSX.Element => {
  return (
    <View>
      {/* Profile */}
      <View style={ViewersStyles.container}>
        <View key={0} style={ViewersStyles.viewerCircle}>
          <Text style={ViewersStyles.viewerNumberText}>+{viewersList}</Text>
        </View>
      </View>

      {/* Text */}
      <Text style={ViewersStyles.alreadyTriedThisText}>
        {viewersList?.length} people
      </Text>
      <Text style={ViewersStyles.alreadyTriedThisText}>
        Already tried this!
      </Text>
    </View>
  );
};

export default Viewers;
