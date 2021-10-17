import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from "./AddUser.module.css";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge, setEnteredAge] = useState("")

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0 || +enteredAge < 0) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUsername} type="text" id="username" onChange={usernameChangedHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input value={enteredAge} type="number" id="age" onChange={ageChangedHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser
