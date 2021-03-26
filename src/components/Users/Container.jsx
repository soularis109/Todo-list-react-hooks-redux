import React from "react";
import {Users} from "./Users";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUser} from "../../redux/users-reducer";


class Container extends React.Component {
    componentDidMount() {
        this.props.getUser()

    }




    render() {
        return <>
            <Users

                users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}/>
        </>

    }
}

let mapStateToProps = (state) => {

    return ({
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    })
}



export default compose(
    connect(mapStateToProps, {getUser})
)(Container)