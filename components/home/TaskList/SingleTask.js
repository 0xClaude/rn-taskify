import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

import COLORS from '../../../styles/colors'

const SingleTask = ({ task, deleteTask }) => {

    return (

        <View
            style={{
                width: "100%",
                height: 70,
                fontSize: 30,
                backgroundColor: COLORS.TodoItem,
                borderRadius: 10,
                padding: 10,
                justifyContent: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 5,
                marginTop: 5,
            }}
        >
            <Text
                style={{
                    justifyContent: "center",
                    textDecorationLine: task.completed ? "line-through" : "none",
                }}
            >
                {task.task}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    if (!task.completed) {
                        deleteTask(task.id);
                    }
                }}
            >
                {!task.completed &&
                    (
                        <Image
                            source={require("../../../assets/trash.png")}
                            style={{
                                width: 16,
                                height: 16,
                                tintColor: "rgba(255, 0, 0, 0.5)"
                            }}
                        />
                    )}

            </TouchableOpacity>
        </View>

    )
}

export default SingleTask