import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import SingleTask from './SingleTask'


import { areAllTasksCompleted } from '../../../utils/tasksCompleted'

export const TaskList = ({ tasks, deleteTask, showCompletedTasks, setShowCompletedTasks }) => {

    if (areAllTasksCompleted(tasks)) return (
        <ScrollView
            keyboardShouldPersistTaps="always"
            contantContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                fontSize: 20,
            }}
        >

            <Text
                style={{
                    fontSize: 20,
                }}
            >
                No tasks yet
            </Text>
        </ScrollView>
    )

    return (

        <ScrollView
            keyboardShouldPersistTaps="always"
            style={{
                fontSize: 20,
                rowGap: 10,
            }}
        >
            {tasks.slice().reverse().map((task) => {
                if (!task.completed) {
                    return (
                        <View
                            key={task.id}
                        >
                            <SingleTask
                                task={task}
                                deleteTask={deleteTask}
                            />
                        </View>
                    )

                }
            })}

        </ScrollView >
    )
}
