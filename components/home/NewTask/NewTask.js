import React from 'react'
import { Text, TextInput, TouchableOpacity, View, Image, Keyboard } from 'react-native'

import styles from '../../../styles'
import COLORS from '../../../styles/colors'

import { useState } from 'react'


const NewTask = ({ addTask }) => {

    const [input, setInput] = useState("");

    return (
        <View
            style={{
                alignSelf: "center",
                rowGap: 10,
                marginBottom: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                }}
            >What do you want to do?</Text>
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    columnGap: 10,
                }}
            >
                <TextInput
                    onChangeText={(text) => setInput(text)}
                    style={{
                        flex: 4,
                        backgroundColor: COLORS.TodoItem,
                        padding: 10,
                        borderRadius: 10,
                    }}
                    value={input}
                />

                <TouchableOpacity
                    style={{
                        flex: 1,
                        width: "100%",
                        justifyContent: "center",
                        backgroundColor: COLORS.BtnGreen,
                        borderRadius: 10,
                        padding: 10,
                    }}
                    onPress={() => {
                        Keyboard.dismiss();
                        addTask(input);
                        setInput("");
                    }}
                >
                    <View>
                        <Image
                            source={
                                require("../../../assets/add.png")
                            }
                            style={{
                                width: 16,
                                height: 16,
                                justifyContent: "center",
                                alignSelf: "center",
                                tintColor: "#ffffff",
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewTask