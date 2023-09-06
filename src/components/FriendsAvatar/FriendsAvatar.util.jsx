import { useEffect, useState } from "react"
import userservice from "../../services/user.service"
import { Link } from "react-router-dom"
import SpinnerComponent from "../Spinner/Spinner"


const FriendsAvatar = ({ friendId }) => {

    const [friendAvatar, setFriendAvatar] = useState(null)

    userservice
        .getFriendAvatar(friendId)
        .then(({ data }) => setFriendAvatar(data))
        .catch(err => console.log(err))

    if (!friendAvatar) {
        return <SpinnerComponent />
    }

    return (
        <>
            <Link to={`/user/profile/${friendId}`}>
                <img className="friendAvatar" src={friendAvatar.avatar} alt="" />

            </Link>
            <p>{friendAvatar.username}</p>
        </>
    )
}

export default FriendsAvatar