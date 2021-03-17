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
        user: {

        },
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
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        signUp(state, user) {
            state.registered.push(user)
        }

    },
}