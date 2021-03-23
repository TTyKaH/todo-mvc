import tasks from "@/collections/tasks"
export default {
    state: {
        user: null,
        registered: [{
                name: "Alex",
                login: "Alex",
                password: "Alex",
                admin: true,
            },
            {
                name: "Bob",
                login: "Bob",
                password: "Bob",
            },
        ],
        tasks: [...tasks],
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        signUp(state, user) {
            state.registered.push(user)
        },
        addTask(state, task) {
            state.tasks.push(task)
        },
        delTask(state, idx) {
            state.tasks.splice(idx, 1);
        }
    },
}