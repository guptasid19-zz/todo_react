import { API_URL } from '../config';
import axios from 'axios';

export default class TaskHandler {
    static fetchTasks() {
        return axios({
            method: 'get',
            url: `${API_URL}/tasks`
        })
    };

    static createTask(task) {
        const { dueDate, title, description } = task;
        return axios({
            method: 'post',
            url: `${API_URL}/tasks`,
            data: {
                title,
                description,
                dueDate
            }
        })
    }

    static editTask(task) {
        const { id, dueDate, title, description } = task;
        return axios({
            method: 'post',
            url: `${API_URL}/${id}/edit`,
            data: {
                title,
                description,
                dueDate
            }
        })
    }
}
