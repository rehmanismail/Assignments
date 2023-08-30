// They think of something you could store in a TypeScript Object. Write a program that creates
//  Objects containing these items.

//Typescript Object

interface FavouriteThings  {
     game: string;
     bookName: string;
     enjoyPlace: string;
}

const favouriteThings: FavouriteThings = {
    game: 'FootBall',
    bookName: 'Mathematics',
    enjoyPlace: 'Muree',
}

console.warn(favouriteThings);