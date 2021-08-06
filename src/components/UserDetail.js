import React, { useState } from 'react'
import axios from 'axios';

function UserDetail({ match }) {

    const fetchUser = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then(response => {
                console.log(response.data)
                setUser(response.data);
            })
            .catch(error => {
                console.error(`Error : ${error}`)
                setUser({ errorMsg: 'User not found' })
            })
    };

    const [user, setUser] = useState(fetchUser);

    // useEffect(() => {
    //     fetchUser();
    // }, []);

    return (
        <div>{user &&
            <div className="table-responsive d-flex justify-content-center">
                <table className="table table-bordered w-50 ">
                    {/* <caption>User Detail</caption> */}
                    <thead>
                        <tr className="bg-info">
                            <th colSpan="2"><h5>{user.name}</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-25">Id</td>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>{user.website}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            {user.address && <td>
                                {user.address.street}, {user.address.suite}, <br />
                                {user.address.city} - {user.address.zipcode}
                            </td>
                            }
                        </tr>

                        <tr>
                            <td>Company Info</td>
                            {user.company && <td> Name : {user.company.name},<br />
                                Details : {user.company.catchPhrase}, {user.company.bs}
                            </td>
                            }
                        </tr>

                    </tbody>
                </table>
            </div>

        }
        </div>
    )
}

export default UserDetail

