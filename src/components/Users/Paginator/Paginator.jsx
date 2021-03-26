import React from "react";

export const Paginator = ({totalUsersCount,pageSize,currentPage}) => {

    let pagesCount = totalUsersCount/pageSize
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            {pages.map(p => {
                 return <span> {p}</span>
        })}
    </div>
}