import { Link } from "react-router-dom";

import classes from './MainNaviagation.module.css';


function MainNaviagation(){
    return(
        <header className={classes.header} >
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>AllMeetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites !</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default MainNaviagation;