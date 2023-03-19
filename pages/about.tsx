import { AboutICPS } from 'components/blocks/about';
import type { NextPage } from 'next';
import { Fragment } from 'react';
import { NavbarICPS } from 'components/blocks/navbar';

const About: NextPage = () => {
    return (
        <Fragment>
            <NavbarICPS/>

            <AboutICPS />
        </Fragment>
        
    );
}

export default About;