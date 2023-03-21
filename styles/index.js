import { StyleSheet } from "react-native";

import COLORS from "./colors";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1
    },
    buttonGreen: {
        alignContent: "center",
        width: "40%",
        backgroundColor: COLORS.BtnGreen,
        padding: 10,
        borderRadius: 10,
    },
    buttonRed: {
        width: "40%",
        backgroundColor: COLORS.BtnRed,
        padding: 10,
        borderRadius: 10,
    }
})

export default styles;