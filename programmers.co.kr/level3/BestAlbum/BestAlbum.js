function solution(genres, plays) {
  let songByGenre = {};
  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i];
    let play = plays[i];
    if (songByGenre[genre] == null) {
      songByGenre[genre] = [[i, play]];
    } else {
      songByGenre[genre].push([i, play]);
    }
  }
  let playByGenre = [];
  for (let genre in songByGenre) {
    let songs = songByGenre[genre];
    let sumPlay = songs.reduce((p, c) => p + c[1], 0);
    songs.sort((a, b) => {
      if (a[1] == b[1]) {
        return a[0] > b[0];
      } else {
        return a[1] < b[1];
      }
    });
    playByGenre.push([genre, sumPlay]);
  }
  playByGenre.sort((a, b) => a[1] < b[1]);
  let bestAlbum = [];
  for (let i = 0; i < playByGenre.length; i++) {
    let genre = playByGenre[i][0];
    let bestTwoSongByGenre = songByGenre[genre].slice(0, 2);
    bestTwoSongByGenre.forEach(c => bestAlbum.push(c[0]));
  }
  return bestAlbum;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
console.log(solution(['classic', 'pop', 'classic', 'pop', 'classic', 'classic'], [400, 600, 150, 2500, 500, 500]));