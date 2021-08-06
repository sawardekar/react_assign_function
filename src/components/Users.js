import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/actions/userActions';
import RegisterPage from './RegisterPage';

function Users() {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetchUSers()
    // }, []
    // );

    // const fetchUSers = async () => {

    //     await axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             console.log(response.data)
    //             setUsers(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             setUsers({ errorMsg: 'Something went wrong' })
    //         })
    // };

    const users = useSelector(state => state.users.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    const handleDeleteUser = (id) => {
        dispatch(userActions.delete(id));
        alert('User Deleted')
    }

    return (
        <div>
            <div className="bg-info clearfix">
                <h2 className="float-center"> Users </h2>
                <div><RegisterPage /></div>
            </div>

            {/* {JSON.stringify(users)} */}

            <div className='card-deck m-3'>
                {users && users.data.map(user =>
                    <div className="col-md-4" key={user.id}>
                        <div className="card border border-info my-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {user.id}. {user.name}
                                </h5>
                                <p className="card-text text-left">Username: {user.username}</p>
                                <p className="card-text text-left">Email: {user.email}</p>
                                <p className="card-text text-left">Phone: {user.phone}</p>
                                <p className="card-text text-left">Company Name: {user.company.name}</p>
                                <p className="card-text text-left">Website: {user.website}</p>

                                <Link to={`/details/${user.id}`}>
                                    <button className='btn mr-2 btn-info btn-sm'>Detail</button>
                                </Link>
                                <Link to={`/edit/${user.id}`}>
                                    <button className='btn mr-2 btn-secondary btn-sm'>Edit</button>
                                </Link>

                                <button className='btn mr-2 btn-danger btn-sm' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Users
