import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import BasicLayout from './Layout/Global';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 400px;
  background: #000;
  border-radius: 16px;
  box-shadow: #000 2px 0px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Title = styled.h1`
  max-width: 250px;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  color: #fff;
  opacity: 85%;
  margin-bottom: 150px;
`;

const LoginButton = styled.div`
  height: 60px;
  width: 200px;
  background: #393;
  border-radius: 25px;
  box-shadow: #000 2px 0px 10px;

  align-items: center;
  justify-content: center;

  transition: background 0.5s;

  &:hover {
    background: #381;
  }

  a {
    color: #fff;
    font-family: -apple-system;
    font-weight: bold;
    font-size: 20px;
  }

  h2 {
    color: #fff;
  }
`;

export default function Login() {
  const { query } = useRouter();

  return (
    <BasicLayout>
      <Container>
        <Head>
          <title>Spotimy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Title>Bem Vindo ao Spotimy</Title>

          <LoginButton>
            <a href="http://localhost:8888">Login</a>
            <h2>{query.login}</h2>
          </LoginButton>
        </Main>
      </Container>
    </BasicLayout>
  );
}
