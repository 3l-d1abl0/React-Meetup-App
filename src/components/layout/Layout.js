import classes from './Layout.module.css';
import MainNaviagation from './MainNavigation';

function Layout(props){
    console.log(props);
    return (
        <div>
            <MainNaviagation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;