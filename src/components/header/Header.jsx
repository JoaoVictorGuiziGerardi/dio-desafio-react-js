import React, { useState } from 'react';
import styled from 'styled-components';
import useGithub from '../../hooks/github-hooks';

const WrapperHeader = styled.div`
    margin-top: 2vh;
    width: 50vw;
    display: flex;
    justify-content: space-around;

    input{
        width: 40vw;
        height: 2em;
        font-size: 1em;
        border-radius: 5px;
        border: 0.5px solid rgb(143,143,189);
        box-shadow: 1.5px 3px 3px gray;
    }

    input:focus{
        outline: 0;
        box-shadow: 0.5px 1.5px 1.5px gray;
    }

    button{
        background-color: rgb(143,143,189);
        color: #fff;
        border: 1px solid transparent;
        border-radius: 5px;
        box-shadow: 3px 3px 3px gray;
    }

    button:hover{
        cursor:pointer;
        background-color: rgb(143,143,189, 0.8);
        box-shadow: 1.5px 1.5px 1.5px gray;
    }
`;

const Header = () => {

    const { getUser } = useGithub();
    const [nomeParaBusca, setNomeParaBusca] = useState();
    
    const buscarUser = () => {
        const input = document.getElementsByTagName('input')[0];
        input.value = '';

        if (!nomeParaBusca) return;
        return getUser(nomeParaBusca);
    }

    return (
        <WrapperHeader>
            <input
                type="text" 
                placeholder='Digite o nickname de um usuário...'
                onChange={(event) => setNomeParaBusca(event.target.value)}
            />
            <button type='submit' onClick={() => buscarUser()}>
                Buscar
            </button>
        </WrapperHeader>
    )
}

export default Header
