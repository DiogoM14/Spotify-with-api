import Head from 'next/head';
import styled from 'styled-components';
import BasicLayout from './Layout/Global';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <BasicLayout>
      <Container>
        <Head>
          <title>Spotify</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Hello World</h1>
      </Container>
    </BasicLayout>
  );
}
