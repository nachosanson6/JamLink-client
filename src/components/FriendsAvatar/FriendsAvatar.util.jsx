import { useEffect, useState } from "react"
import userservice from "../../services/user.service"
import { Link } from "react-router-dom"


const FriendsAvatar = ({ friendId }) => {

    const [friendAvatar, setFriendAvatar] = useState()

    userservice
        .getFriendAvatar(friendId)
        .then(({ data }) => setFriendAvatar(data.avatar))
        .catch(err => console.log(err))


    return (
        <>
            <Link to={`/user/profile/${friendId}`}>
                <img className="friendAvatar" src={friendAvatar} alt="" />
            </Link>
        </>
    )
}

export default FriendsAvatar