import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge, setEnteredAge] = useState("")
    const [error, setError] = useState()

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid name and age (non-empty values)",
            })
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: "Invalid age",
                message: "Please Enter a valid age (> 0).",
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        // console.log(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input value={enteredUsername} type="text" id="username" onChange={usernameChangedHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input value={enteredAge} type="number" id="age" onChange={ageChangedHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
