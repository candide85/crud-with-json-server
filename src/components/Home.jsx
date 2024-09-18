import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { deleteUser } from "./features/users/userSlice";


const Home = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({
            id: id
        }))
    }

    return(
        <div className="container p-4">
            <h2>CRUD APP WITH JSON SERVER</h2>
            <Link to="/create" className="btn btn-success my-3">CREATE +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/update/${user.id}`} className="btn btn-sm btn-primary">EDIT</Link>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



export default Home