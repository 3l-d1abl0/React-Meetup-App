import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});


export function FavoriteContextProvider(props){

    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favoriteMeetup){

        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){

        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.filter( meetup => meetup.id != meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id == meetupId);
    }

    const context = {
        favorites: userFavourites,
        totalFavorites: userFavourites.length,
        addFavorite: addFavouriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );

}

export default FavoritesContext;