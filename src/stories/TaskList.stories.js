import React from 'react';
import { taskData, actionsData } from './Task.stories';
import TaskList from '../components/TaskList';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
    // stories that end in "Data" are not stories
    excludeStories: /.*Data$/
};

export const defaultTaskData = [
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6' }
];

export const withPinnedTaskData = [
    ...defaultTaskData.slice(0, 5),
    { ...taskData, id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
];

export const Default = () => {
    return <TaskList tasks={defaultTaskData} {...actionsData} />
}

export const WithPinnedTasks = () => {
    return <TaskList tasks={withPinnedTaskData} {...actionsData} />
}

export const Loading = () => {
    return <TaskList loading tasks={[]} {...actionsData} />
}

export const Empty = () => {
    return <TaskList tasks={[]} {...actionsData} />
}