export const AUTH_STATE_KEY = "authState";

let fetchAuth = localStorage.getItem(AUTH_STATE_KEY) || null;



export const authState = {
    isAuthenticated: false,
    user: {
        fullName: "",
        email: "",
        image_url: ""
    }
}

export const setAuthUser = ({...data}) => {
    const authStateFromBackend = {
        isAuthenticated: true,
        user: {
            fullName: data.last_name + " " + data.first_name,
            email: data.email,
            image_url: data.image_url
        }
    }

    localStorage.setItem(AUTH_STATE_KEY, JSON.stringify(authStateFromBackend));
}

if(fetchAuth === null) localStorage.setItem(AUTH_STATE_KEY, JSON.stringify(authState));