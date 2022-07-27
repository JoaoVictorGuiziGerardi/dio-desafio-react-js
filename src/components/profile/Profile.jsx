import React from 'react';
import styled from 'styled-components';
import { StatusCount } from '../';

const ProfileWrapper = styled.div`
    flex:1;
    width: 80vw;
    margin-top: 3vh;
    height: 20vh;
    display: flex;
    justify-content: center;
`;

const ImgPerfil = styled.img`
    min-height: 50px;
    max-height: 250px;
    border-radius: 50%;
`;

const DadosWrapper = styled.div`
    margin-left: 1vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1{
      font-size: 1.5em;
    }
`;

const DadosGerais = styled.div`
      display:flex;
      align-items: flex-start;
      font-size: 0.75em;

      h3{
        margin-top: 0;
      }

      a, p{
        font-weight: 200;
        display: inline;
        margin-left: 1vw;
      }
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <div>
        <ImgPerfil src="https://avatars.githubusercontent.com/u/68558987?v=4" alt="Foto de Perfil" />
      </div>
      <DadosWrapper>
        <div>
          <h1>João Victor Guizi Gerardi</h1>
        </div>
        <DadosGerais>
          <h3>
            Username: 
            <a href="#">JoaoVictorGuiziGerardi</a>
          </h3>
        </DadosGerais>
        <DadosGerais>
          <h3>
            Company: 
            <p>ITShare - Soluções em Tecnologia</p>
          </h3>
        </DadosGerais>
        <DadosGerais>
          <h3>
            Location: 
            <p>Uberlândia - MG</p>
          </h3>
        </DadosGerais>
        <DadosGerais>
          <h3>
            Blog: 
            <a href="#">xxxxx</a>
          </h3>
        </DadosGerais>
        <StatusCount/>
      </DadosWrapper>
    </ProfileWrapper>
  )
}

export default Profile
