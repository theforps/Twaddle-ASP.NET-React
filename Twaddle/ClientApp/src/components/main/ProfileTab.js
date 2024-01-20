import LogoutButton from "./LogoutButton";
import React from "react";
import {DeleteUser} from "../requests/UserQueries";

const ProfileTab = () => {

    const handleDeleteUser = async () => {
        
        const jwt = sessionStorage.getItem('token');
        
        const result = await DeleteUser(jwt);
        
        console.log("Профиль удален:");
        console.log(result.data);
        
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user');
    }

    return (
        <div>
            <button onClick={handleDeleteUser} className="btn btn-outline-danger d-block m-5">
                Удалить аккаунт
            </button>
            
            <LogoutButton />
        </div>
    );
}
export default ProfileTab;