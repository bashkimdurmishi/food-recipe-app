import * as Font from "expo-font";
const loadFonts = async (
  setFontsLoaded: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await Font.loadAsync({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
  setFontsLoaded(true);
};

export default loadFonts;
