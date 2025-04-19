const playlistModel = require('../models/playlistModel')

module.exports = {
    // GET "/playlists"
    index: (req, res) => {
        const playlists = playlistModel.getAllPlaylists()
        if(playlists.length >= 1){
            res.status(200).json(playlists)}
        else{
            res.status(404).json({ message: "Playlists not found!" })
        }
    },

    // GET "playlists/:name"
    show: (req, res) => {
        const { name } = req.params
        const playlistFound = playlistModel.getPlaylistByName(name)
        if(playlistFound){
            res.status(200).json(playlistFound)
        }
        else{
            res.status(404).json({ message: "Playlist not found!" })
        }
    },
    
    // POST "/playlists"
    create: (req, res) => {
        const { name, tags, musics } = req.body
        if (name !== "" && tags !== "" && musics !== "") {
            playlistModel.createPlaylist(name, tags, musics)
            res.status(201).json({ message: "Playlist created successfully!" })
        } else {
            res.status(400).json({ message: "Invalid data!" })
        }
    },

    //PUT "/playlists/:name"
    update: (req, res) => {
        const { name } = req.params
        const { newName } = req.body

        const playlist = playlistModel.getPlaylistByName(name)

        if (newName === "") {
            res.status(400).json({ message: "Invalid data!" })
        }
        else if (playlist === undefined) {
            res.status(404).json({ message: "Playlist not found!" })
        } else {
            const playlistUpdated = playlistModel.updatePlaylistName(name, newName)
            res.status(200).json(playlistUpdated)
        }

    },

    //PUT "/playlists/:name/tags"
    updateTags: (req, res) => {
        const { name } = req.params
        const { tags } = req.body

        const playlist = playlistModel.getPlaylistByName(name)

        if (tags === "") {
            res.status(400).json({ message: "Invalid data!" })
        }
        else if (playlist === undefined) {
            res.status(404).json({ message: "Playlist not found!" })
        } else {
            const playlist = playlistModel.updatePlaylistTags(name, tags)
            res.status(200).json(playlist)
        }
    },

    // DELETE "/playlists/:name"
    delete: (req, res) => {
        const { name } = req.params

        const playlist = playlistModel.getPlaylistByName(name)

        if (playlist === undefined) {
            res.status(404).json({ message: "Playlist not found!" })
        } else {
            playlistModel.deletePlaylist(name)
            res.status(204).json({ message: "Playlist deleted successfully!" })
        }
    },

    // POST "/playlists/:name/musics"
    addMusics: (req, res) => {
        const { name } = req.params
        const { musics } = req.body

        const playlist = playlistModel.getPlaylistByName(name)

        if (musics === "" || musics.title === "" || musics.year === "" || musics.author === "" || musics.album === "") {
            res.status(400).json({ message: "Invalid data!" })
        }
        else if (playlist === undefined) {
            res.status(404).json({ message: "Playlist not found!" })
        } else {
            const playlistMusicsUpdated = playlistModel.addMusics(name, musics)
            res.status(201).json(playlistMusicsUpdated)
        }

    },

    // DELETE "/playlists/:name/musics/:title"
    removeMusics: (req, res) => {
        const { name, title } = req.params

        const indexMusicDeleted = playlistModel.deleteMusics(name, title)
        
        if (indexMusicDeleted === -1){
            res.status(404).json({ message: "Music not found!" })
        } else if (indexMusicDeleted === undefined) {
            res.status(404).json({ message: "Playlist not found!" })
        }

        res.status(204).json({ message: "Music deleted successfully!" }).end()
    }
}