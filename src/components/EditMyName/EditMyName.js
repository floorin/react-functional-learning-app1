import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import styles from './editmyname.module.css';

function EditMyName() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser);

    const [input, setInput] = useState({lastName:currentUser.lastName,firstName:currentUser.firstName})

    const handleInputChange = (e) => {setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })
        if(e.currentTarget.name =='lastName'){
            dispatch({
                type: "SET_LAST_NAME",
                payload:  e.currentTarget.value
            })
        }
        if(e.currentTarget.name =='firstName'){
            dispatch({
                type: "SET_FIRST_NAME",
                payload:  e.currentTarget.value
            })
        }
    };

    return <>
        <div className={styles.card}>
            <h4>I'm the "EditMyName" component</h4>
            <div>
                <label>LastName:</label>
                <input type="text" value={input.lastName} name="lastName" onChange={handleInputChange} />
            </div>
            <div>
                <label>FirstName:</label>
                <input type="text" value={input.firstName} name="firstName" onChange={handleInputChange} />
            </div>
        </div>
    </>;
}
export default EditMyName;
