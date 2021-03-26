import React from "react";
import {User} from "./User";
import {Paginator} from "./Paginator/Paginator";

export const Users = ({users,pageSize,totalUsersCount,currentPage}) => {

    return <>
        <h1>Users</h1>
        <Paginator pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   currentPage={currentPage}/>
        {users.map(user =>  <User user={user} />)}

    </>
}