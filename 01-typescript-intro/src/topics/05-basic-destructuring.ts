interface AudioPlayer{
   audioVolume: number;
   songDuration: number;
   song: string;
   details: Details; 
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Chupón",
    details: {
        author: 'Yeri MUA',
        year: 2023
    }
}
//desestructuración de objetos
const song = 'New Song';

const {song:anotherSong, songDuration: duration, details } = audioPlayer;
const {author} = details;

//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', author);

//Desestructuración de arreglos
const [, , trunks ='Not found']: string[]=['Goku','Vegeta']

console.error('Personaje 3:', trunks);

export{};