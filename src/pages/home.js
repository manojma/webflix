import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';


export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programs and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>


                    <OptForm>

                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button><a Style="color:white; text-decoration:none; "href="/signup">Get Started</a></OptForm.Button>
                        <OptForm.Break />

                    </OptForm>

                </Feature>
            
            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
        </>
    );
}