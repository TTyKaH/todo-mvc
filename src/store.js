import tasks from "@/collections/tasks"
export default {
    // Почему этот массив был расположен здесь?
    // я его перенес в state из-за того, что не мог обратиться здесь к registere в signin компонента
    // registered: [{
    //         name: "Alex",
    //         login: "Alex",
    //         password: "Alex",
    //         admin: true,
    //     },
    //     {
    //         name: "Bob",
    //         login: "Bob",
    //         password: "Bob",
    //     },
    // ],
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