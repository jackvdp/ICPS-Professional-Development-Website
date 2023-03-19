import { AboutICPS } from 'components/blocks/about';
import type { NextPage } from 'next';
import { Fragment } from 'react';
import { NavbarICPS } from 'components/blocks/navbar'
import { FooterICPS } from 'components/blocks/footer';

const About: NextPage = () => {
    return (
        <Fragment>
            <NavbarICPS/>

            <AboutICPS />

            <FooterICPS />
        </Fragment>
        
    );
}

export default About;