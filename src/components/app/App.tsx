import React from 'react';
import './App.css';
import {
  Redirect, Route, Switch
} from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import Main from '../main/Main';
import Container from '../container/Container';
import Segment from '../segment/Segment';
import HeaderForm from '../forms/header-form/HeaderForm';
import FooterForm from '../forms/footer-form/FooterForm';
import LoginForm from '../forms/auth-forms/LoginForm';
import RegisterForm from '../forms/auth-forms/RegisterForm';
import UsersForm from '../forms/users-form/UsersForm';
import PostsForm from '../forms/posts-form/PostsForm';
import ProfileForm from '../forms/profile-form/ProfileForm';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <HeaderForm />
        <Main>
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
              <Route exact path="/users">
                <UsersForm />
              </Route>
              <Route exact path="/posts">
                <PostsForm />
              </Route>
              <Route exact path="/user/:id">
                <ProfileForm />
              </Route>
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
