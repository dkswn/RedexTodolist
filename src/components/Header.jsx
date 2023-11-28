import React, { useState } from 'react';
import styled from 'styled-components';



function Header() {
    const [todos, setTodos] = useState();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleHandlechange = (event) => {
        setTitle(event.target.value);
    };
    const contentHandlechange = (event) => {
        setContent(event.target.value);
    };
     const FormSubmitHandler = (event) => {
        event.preventDefault();
     }

    return (
    <>
        <HeaderContainer>
        <FormSubmitContainer onSubmit={FormSubmitHandler}>
            <h2>Todolist</h2>
            <InputBox onChange={titleHandlechange}/>
            <InputBox onChange={contentHandlechange}/>
            <AddButton>추가</AddButton>
            </FormSubmitContainer>
        </HeaderContainer>
        </>
        )
}
export default Header;

const HeaderContainer = styled.div`
    background-color: aqua;
    align-items: center;
    display: flex;
    padding: 10px;
    justify-content: space-between;
`;
const InputBox = styled.input`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left : 3px;
    
`;
const AddButton = styled.button`
    padding:10px;
`;
const FormSubmitContainer = styled.form`
    display: flex;
`