import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import SingleTask from './SingleTask'

const CompletedTasks = ({ tasks, setShowCompletedTasks, showCompletedTasks }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => setShowCompletedTasks(!showCompletedTasks)}
            >
                <Text
                    style={{
                        marginTop: 20,
                        alignSelf: "flex-end",
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.5)"
                    }}
                >
                    {showCompletedTasks ? "Hide completed tasks" : "Show completed tasks"}
                </Text>
            </TouchableOpacity>
            {
                showCompletedTasks && tasks.slice().reverse().map((task) => {
                    if (task.completed) {
                        return (
                            <View
                                key={task.id}
                            >
                                <SingleTask
                                    task={task}
                                />
                            </View>
                        )
                    }
                })
            }
        </View>
    )
}

export default CompletedTasks