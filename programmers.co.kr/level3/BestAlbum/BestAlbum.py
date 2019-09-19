from functools import cmp_to_key


def compare_song(x, y):
    if x['play'] == y['play']:
        return x['no'] - y['no']
    else:
        return y['play'] - x['play']


def solution(genres, plays):
    genre_map = {}
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        song = {
            'no': i,
            'genre': genre,
            'play': play
        }
        if genre not in genre_map:
            genre_map[genre] = {
                'songs': [],
                'play': 0,
            }
        genre_map[genre]['songs'].append(song)
        genre_map[genre]['play'] += song['play']
    genre_list = []
    for i in genre_map:
        genre = genre_map[i]
        genre['songs'] = sorted(genre['songs'], key=cmp_to_key(compare_song))
        genre_list.append(genre)
    genre_list = sorted(
        genre_list, key=lambda genre: genre['play'], reverse=True)
    best_album = []
    for genre in genre_list:
        songs = genre['songs'][0:2]
        best_album.extend(map(lambda s: s['no'], songs))
    return best_album


print(solution(['classic', 'pop', 'classic',
                'classic', 'pop'], [500, 600, 150, 800, 2500]))
