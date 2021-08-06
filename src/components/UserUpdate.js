import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from './store/actions/userActions';

function UserUpdate({ match }) {

    // useEffect(() => {
    //     fetchUser();
    // }, []);

    const history = useHistory();
    // console.log(match)

    const fetchUser = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then(response => {
                console.log("UPDATE FETCH USER", response.data)
                setUser(response.data);
            })
            .catch(error => {
                console.error(`Error : ${error}`)
                setUser({ errorMsg: 'User not found' })
            })
    };

    const [user, setUser] = useState(fetchUser);
    const [isValid, setIsvalid] = useState(false)
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user.name && user.username && user.email && user.phone) {
            setIsvalid(false)
        }
        else {
            setIsvalid(true)
        }
    }, [user])

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('In update handle submit', user)
        setSubmitted(true);
        dispatch(userActions.updateUser(user));

        alert("User updated successfully")
        history.push('/');
    }

    return (
        // <div className="col-lg-6 offset-lg-3">
        <div className="table-responsive d-flex justify-content-center">
            <table className="table table-bordered w-50 ">
                {/* <caption>User Detail</caption> */}
                <thead>
                    <tr className="bg-info">
                        <th colSpan="2"><h5>Update user</h5></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={user && user.name} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                                    {submitted && !user.name &&
                                        <div className="invalid-feedback">Name is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={user && user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                                    {submitted && !user.username &&
                                        <div className="invalid-feedback">Username is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" value={user && user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                                    {submitted && !user.email &&
                                        <div className="invalid-feedback">Email is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" value={user && user.phone} onChange={handleChange} className={'form-control' + (submitted && !user.phone ? ' is-invalid' : '')} />
                                    {submitted && !user.phone &&
                                        <div className="invalid-feedback">Phone is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button type='submit' className="btn mr-2 btn-info" onClick={handleSubmit} disabled={isValid}>
                                        Update
                                    </button>

                                    <Link to={`/`}>
                                        <button type="button" className="btn btn-danger">
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        // </div>

    )
}

export default UserUpdate
