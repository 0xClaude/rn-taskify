export const areAllTasksCompleted = (tasks) => {
    return tasks.every((task) => task.completed === true);
};
