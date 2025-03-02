let playlists = [
    {
        name: "Classic Rock",
        tags: ["rock", "80s", "classic"],
        musics: [
            {
                title: "Sweet Child O' Mine",
                year: 1987,
                author: "Guns N' Roses",
                album: "Appetite for Destruction"
            },
            {
                title: "Livin' on a Prayer",
                year: 1986,
                author: "Bon Jovi",
                album: "Slippery When Wet"
            },
            {
                title: "Back in Black",
                year: 1980,
                author: "AC/DC",
                album: "Back in Black"
            },
            {
                title: "Eye of the Tiger",
                year: 1982,
                author: "Survivor",
                album: "Eye of the Tiger"
            },
            {
                title: "Another One Bites the Dust",
                year: 1980,
                author: "Queen",
                album: "The Game"
            }
        ]
    }
]

const playlistModel = {
    
    getAllPlaylists() {
        const namePlaylists = playlists
        return namePlaylists
    },

    getPlaylistByName(name) {
        const playlist = playlists.find(obj => obj.name === name)
        return playlist
    },

    createPlaylist(playlistName, tags, musics) {
        const  playlist = {
            name: playlistName,
            tags: tags,
            musics: musics
        }
        playlists.push(playlist)
    },

    updatePlaylistName(playlistName, newPlaylistName) {
        const playlist = this.getPlaylistByName(playlistName)
        playlist.name = newPlaylistName
        return playlist
    },

    updatePlaylistTags(playlistName, tags) {
        const playlist = this.getPlaylistByName(playlistName)
        playlist.tags = tags
        return playlist
    },

    deletePlaylist(playlistName) {
        const index = playlists.findIndex(obj => obj.name === playlistName)
        playlists.splice(index, 1)
    },

    addMusics(playlistName, newMusic) {
        const playlist = this.getPlaylistByName(playlistName)
        const music = {
            title: newMusic.title,
            year: newMusic.year,
            author: newMusic.author,
            album: newMusic.album
        }
        playlist.musics.push(music)
        return playlist
    },

    deleteMusics(playlistName, nameMusic){
        const playlist = this.getPlaylistByName(playlistName)
        if (playlist === undefined){
            return undefined
        }
        const index = playlist.musics.findIndex(obj => obj.title === nameMusic)
        if (index === -1){
            return -1
        }
        playlist.musics.splice(index, 1)
        return playlist
    }
}

module.exports = playlistModel