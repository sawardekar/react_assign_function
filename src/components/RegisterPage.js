import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from './store/actions/userActions';


function RegisterPage() {

    const initialState = {
        name: '',
        userName: '',
        email: '',
        phone: '',
        companyName: ''
    }

    const [user, setUser] = useState(initialState);

    const [isValid, setIsvalid] = useState(true)
    const [submitted, setSubmitted] = useState(false);
    // const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.name && user.userName && user.email && user.phone && user.companyName) {
            setIsvalid(false)
        }
        else {
            setIsvalid(true)
        }
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('in handle submit', user)

        setSubmitted(true);
        // if (user.name && user.userName && user.email && user.phone && user.companyName) {
        dispatch(userActions.register(user));
        // }
        alert('New User created')
        setUser(initialState)
        setSubmitted(false)
    }

    return (
        <div>
            {/* <Link to={`/add`}> */}
            <button type="button" className="btn btn-secondary float-right" data-toggle="modal" data-target="#newUserModal">
                Add User
            </button>
            {/* </Link> */}

            {/* <!-- The Modal --> */}
            <div className="modal" id="newUserModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-info text-center">
                            <h5 className="modal-title">New User</h5>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="col-lg-8 offset-lg-2">
                                <form name="form-popup" onSubmit={handleSubmit} data-toggle='modal'>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" value={user.name} onChange={handleChange} className={'form-control' + (submitted && !user.userName ? ' is-invalid' : '')} />
                                        {submitted && !user.name &&
                                            <div className="invalid-feedback">Name is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="userName" value={user.userName} onChange={handleChange} className={'form-control' + (submitted && !user.userName ? ' is-invalid' : '')} />
                                        {submitted && !user.userName &&
                                            <div className="invalid-feedback">Username is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                                        {submitted && !user.email &&
                                            <div className="invalid-feedback">Email is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" name="phone" value={user.phone} onChange={handleChange} className={'form-control' + (submitted && !user.phone ? ' is-invalid' : '')} />
                                        {submitted && !user.phone &&
                                            <div className="invalid-feedback">Phone is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input name="companyName" value={user.companyName} onChange={handleChange} className={'form-control' + (submitted && !user.companyName ? ' is-invalid' : '')} />
                                        {submitted && !user.companyName &&
                                            <div className="invalid-feedback">Company name is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="btn mr-2 btn-info" onClick={handleSubmit} data-dismiss="modal" disabled={isValid}>
                                            {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                                            Add
                                        </button>

                                        <button id='close-button' type="button" className="btn btn-danger" data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RegisterPage