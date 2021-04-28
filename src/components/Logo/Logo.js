import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        {/**Image src direct path won't work because in the end
         * webpack will take all these files bundle them together and create
         * a new output folder. We can't see in the development mode because
         * all of that will happen in memory but once we do publish our app
         * we will get a real different folder where all the optimized, compiled 
         * and bundled assets are contained in.
         */}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);


export default Logo;