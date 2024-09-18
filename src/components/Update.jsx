import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./features/users/userSlice"



const Update = () => {

    const {id} = useParams()
    const users = useSelector(state => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const existUser = users.filter(n => n.id == id)
    const {name, email} = existUser[0]

    const [existName, setExistName] = useState(name)
    const [existEmail, setExistEmail] = useState(email)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            name: existName,
            email: existEmail
        }))
        
        navigate("/")

    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
             <div className="w-50 border bg-secondary text-white p-5">
            <h2>Update User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="my-2" htmlFor="name">Name:</label>
                            <input type="text" name="name" className="form-control" placeholder="enter your name" 
                            value={existName}
                            onChange={e => setExistName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="my-2" htmlFor="email">Email:</label>
                            <input type="text" name="email" className="form-control" placeholder="enter your email" 
                            value={existEmail}
                            onChange={e => setExistEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-info my-2">Update</button>
                </form>
            </div>
        </div>
    )
}



export default Update