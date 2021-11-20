import React from 'react';
import './App.css';
import {
  Redirect, Route, Switch
} from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import Main from '../main/Main';
import Container from '../container/Container';
import Segment from '../segment/Segment';
import HeaderForm from '../forms/HeaderForm/HeaderForm';
import FooterForm from '../forms/FooterForm/FooterForm';
import LoginForm from '../forms/AuthForms/LoginForm';
import RegisterForm from '../forms/AuthForms/RegisterForm';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <HeaderForm />
        <Main paddings={{ top: 40, bottom: 40 }}>
          <Container>
            <Switch>
              <Route exact path="/register">
                <Segment>
                  <RegisterForm />
                </Segment>
              </Route>
              <Route exact path="/login">
                <Segment>
                  <LoginForm />
                </Segment>
              </Route>
              <Route exact path="/posts" />
              <Route exact path="/users" />
              <Route exact path="/user/:id" />
              <Route exact path="/lk" />
              <Redirect from="/" to="/login" />
            </Switch>
          </Container>
        </Main>
        <FooterForm />
      </Wrapper>
    </div>
  );
}

export default App;
