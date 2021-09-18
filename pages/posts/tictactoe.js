import React, {  useState }  from 'react';
import ReactDOM from 'react-dom';
import TicTacToeGame from '../../components/ticTacToeGame'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function TicTacToe() {
    return (
      <Layout>
      <Head>
          <title>Tic Tac Toe</title>
      </Head>
        <h1>Tic Tac Toe</h1>
        <TicTacToeGame></TicTacToeGame>
      </Layout>
    )
  }