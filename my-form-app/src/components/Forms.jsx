import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    padding: 50px 0;
    font-size: 16px;

`
const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
`
//const InputCheck = styled.checkbox`
//float: left;
//`

export function Forms({ AddCards }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [city, setCity] = useState('');
    const [gifts, setGifts] = useState([]);
    const [checked, setChecked] = useState(false);
    const [valueGender, setValueGender] = useState("0");
    const [valueAgree, setValueAgree] = useState("0");

    function handleChangeName(event) {
        setName(event.target.value)
    };
    
    function handleChangeDate(event) {
        setDate(event.target.value)
    };
    
    function handleChangeCity(event) {
        setCity(event.target.value)
    };

    function handleChangeGift(event) {
        const newGifts = [...gifts, event.target.value]
        setGifts(newGifts)
    };

    function handleChangeValue(event) {
        setValueAgree(event.target.value);
    }

    function handleChangeGender(event) {
        setValueGender(event.target.value);
    }

    function handleSubmit(event) {
            event.preventDefault();
            const data = {
                name,
                date,
                city,
                gifts,
            }
            AddCards(data);
            setName('');
            setDate('');
            setCity('');
            setGifts('');
            setChecked(false);
            setValueGender(0);
            setValueAgree(0);
    }

    return (
        <div className="input-wrapper">
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Enter your full name" name="name" value={name} onChange={handleChangeName} />
                {!name.length && <p>Name should be more than 1 symbol</p>}
                <Input type="date" value={date} onChange={handleChangeDate} />
                <select value={city} multiply onChange={handleChangeCity} >
                    <option value="" hidden>Choose your city</option>
                    <option value="Brest">Brest</option>
                    <option value="Gomel">Gomel</option>
                    <option value="Grodno">Grodno</option>
                    <option value="Minsk">Minsk</option>
                    <option value="Mogilev">Mogilev</option>
                    <option value="Vitebsk">Vitebsk</option>
                </select>
                <p><input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                    I agree to the processing of personal data</p>
                <Label value={gifts} onChange={handleChangeGift}>Choose additional gifts to order
                    <p><input type="checkbox" name="option1" value="Gift 1"/>Gift 1</p>
                    <p><input type="checkbox" name="option2" value="Gift 2"/>Gift 2</p>
                    <p><input type="checkbox" name="option3" value="Gift 3"/>Gift 3</p>
                    <p><input type="checkbox" name="option4" value="Gift 4"/>Gift 4</p>
                    <p><input type="checkbox" name="option5" value="Gift 5"/>Gift 5</p>
                </Label> 
                <Label>Choose your gender
                    <p><input type="radio" value="1" checked={valueGender === "1" ? true : false} onChange={handleChangeGender}/>male</p>
                    <p><input type="radio" value="2" checked={valueGender === "2" ? true : false} onChange={handleChangeGender}/>female</p>
                </Label>
                <Label>
                    <p><input type="radio" value="1" checked={valueAgree === "1" ? true : false} onChange={handleChangeValue}/>I want to be notified about promotions</p>
                    <p><input type="radio" value="2" checked={valueAgree === "2" ? true : false} onChange={handleChangeValue}/>I don/'t want to be notified about promotions</p>
                </Label>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}