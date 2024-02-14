export default () => {
    const login = ({username, password}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = $fetch("/api/auth/login", {
                    method: "POST",
                    body: {
                        username,
                        password
                    }
                })
                console.log(data)
            } catch (e) {

            }
        })
    }
    return {
        login
    }
}