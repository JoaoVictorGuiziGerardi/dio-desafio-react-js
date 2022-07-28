import React from 'react';
import styled from 'styled-components';
import { StatusCount } from '../';
import useGithub from '../../hooks/github-hooks';

const ProfileWrapper = styled.div`
    flex:1;
    width: 80vw;
    margin-top: 3vh;
    height: 20vh;
    display: flex;
    justify-content: center;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items:center;
      justify-content: center;
    }
`;

const ImgPerfil = styled.img`
    min-height: 50px;
    max-height: 250px;
    border-radius: 50%;

    @media (max-width: 650px) {
      max-height: 100px;
    }
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

  const { githubState } = useGithub();

  return (
    <ProfileWrapper>
      <div>
        <ImgPerfil src={githubState.user.avatar_url} alt="Foto de Perfil" />
      </div>
      <DadosWrapper>
        <div>
          <h1>{githubState.user.name}</h1>
        </div>
        <DadosGerais>
          <h3>
            Username: 
            <a href={githubState.user.html_url}>{githubState.user.login}</a>
          </h3>
        </DadosGerais>
        <DadosGerais>
          <h3>
            Company: 
            <p>{githubState.user.company}</p>
          </h3>
        </DadosGerais>
        <DadosGerais>
          <h3>
            Location: 
            <p>{githubState.user.location}</p>
          </h3>
        </DadosGerais>
        <DadosGerais>
          <h3>
            Blog: 
            <a href={githubState.user.blog}>
              {githubState.user.blog}
            </a>
          </h3>
        </DadosGerais>
        <StatusCount/>
      </DadosWrapper>
    </ProfileWrapper>
  )
}

export default Profile
