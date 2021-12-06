const instialstate = {
    user: null,
    token: "",
};
const singin = (state=instialstate,action) => {
    const {type,payload} = action;
    switch (type) {
        case "LOGIN": const {user,token} = payload;
        localStorage.setItem("token",token)
        return {user,token};
        case "LOGOUT":localStorage.clear();
        return payload;
        default : return state;
    }

}
export default singin;
export const login = (data) => {return{type:login,payload:data}}
export const logout = (data) => {return{payload:data}}