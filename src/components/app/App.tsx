import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Wrapper>
        <HeaderForm />
        <Main>
          {/* paddings={{ top: 40, bottom: 40 }} */}
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
