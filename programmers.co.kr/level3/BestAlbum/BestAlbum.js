function solution(genres, plays) {
  let genreMap = {};
  for (let i in genres) {
    i = parseInt(i);
    let song = {
      no: i,
      genre: genres[i],
      play: plays[i],
    };
    if (genreMap[song.genre] == null) {
      genreMap[song.genre] = {
        songs: [],
        play: 0,
      };
    }
    genreMap[song.genre].songs.push(song);
    genreMap[song.genre].play += song.play;
  }
  let genreList = [];
  for (let i in genreMap) {
    let genre = genreMap[i];
    genre.songs.sort((a, b) => {
      if (a.play === b.play) {
        return a.no > b.no;
      } else {
        return a.play < b.play;
      }
    });
    genreList.push(genre);
  }
  genreList.sort((a, b) => a.play < b.play);
  let bestAlbum = [];
  for (let i in genreList) {
    let genre = genreList[i];
    let songs = genre.songs.slice(0, 2);
    bestAlbum = bestAlbum.concat(songs.map(v => v.no));
  }
  return bestAlbum;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));   // [4, 1, 3, 0]
console.log(solution(["pop", "pop"], [100, 100]));    // [0, 1]
console.log(solution(["classic", "pop", "classic", "pop", "classic", "classic"], [400, 600, 150, 2500, 500, 500]));   // [3, 1, 4, 5]
