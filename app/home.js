import { Text, SafeAreaView, View, TouchableOpacity, TextInput } from "react-native"
import { SplashScreen, Stack } from 'expo-router'
import { useState } from "react"

import {
    useFonts,
    Overpass_400Regular,
} from "@expo-google-fonts/overpass";

import styles from "../styles"
import COLORS from "../styles/colors"
import NewTask from "../components/home/NewTask/NewTask"
import { TaskList } from "../components/home/TaskList/TaskList"
import CompletedTasks from "../components/home/TaskList/CompletedTasks";

const Home = () => {

    let [fontsLoaded] = useFonts({
        Overpass_400Regular,
    });

    const [task, setTask] = useState([]);
    const [showCompletedTasks, setShowCompletedTasks] = useState(false);

    const addTask = (newTask) => {
        if (newTask.length > 0) {
            setTask([...task, {
                id: task.length + 1,
                task: newTask,
                completed: false,
            }]);
        }
    }

    const deleteTask = (id) => {
        const newTasks = task.map((oldTask) => {
            if (oldTask.id === id) {
                return { ...oldTask, completed: true }
            } else {
                return oldTask;
            }
        })
        setTask(newTasks);
    }

    if (!fontsLoaded) {
        return <SplashScreen />;
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Stack.Screen
                options={{
                    title: `Taskify`,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.Gray100,
                        fontFamily: "Overpass_400Regular",
                    }

                }}
            />
            <SafeAreaView
                style={{
                    flex: 1,
                    padding: 20,
                }}
            >
                <NewTask
                    addTask={addTask}
                />
                <TaskList
                    tasks={task}
                    deleteTask={deleteTask}
                    showCompletedTasks={showCompletedTasks}
                    setShowCompletedTasks={setShowCompletedTasks}
                />
                <CompletedTasks
                    tasks={task}
                    showCompletedTasks={showCompletedTasks}
                    setShowCompletedTasks={setShowCompletedTasks}
                />
            </SafeAreaView>

        </SafeAreaView>

    )
}

export default Home