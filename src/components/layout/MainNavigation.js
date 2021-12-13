import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from './MainNaviagation.module.css';
import FavoriteContext from '../../store/favorites-context';


function MainNaviagation(){

    const FavoriteCtx = useContext(FavoriteContext);

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
                        <Link to='/favorites'>
                            My Favorites !
                            <span className={classes.badge}>{FavoriteCtx.totalFavorites}</span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default MainNaviagation;