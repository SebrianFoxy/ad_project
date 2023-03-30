export default {
	state: {
        loading: false,
        error: null
    },
	mutations: {
        setLoading (state, payload) {
		    state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }

    }, 
	actions: {
        registerUser({commit},{email, password}){
            commit('clearError')
            commit('setLoading', true)
            fb.auth().createUserWithEmailAndPassword(email,password).then(response => {
                commit('setUser', new User(response.user.uid))
                commit('setLoading', false)
            }).catch( error => {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            })
        }

    },
	getters: {
        loading (state) {
		    return state.loading
	},
        error (state) {
            return state.error
	}

    },
}

