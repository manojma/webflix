import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../webflix-logo.png';

export function HeaderContainer({ children }){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to = {ROUTES.HOME} alt="Webflix" src={logo} />
                <Header.ButtonLink to = {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}