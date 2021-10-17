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
        console.log(enteredUsername, enteredAge);
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={usernameChangedHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" onChange={ageChangedHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser
