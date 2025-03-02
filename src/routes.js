const express = require('express')
const playlistController = require('./controllers/playlistController')

const router = express.Router()

// GET
router.get('/playlists', playlistController.index)
router.get('/playlists/:name', playlistController.show)

// POST
router.post('/playlists', playlistController.create)
router.post('/playlists/:name/musics', playlistController.addMusics)

// PUT
router.put('/playlists/:name', playlistController.update)
router.put('/playlists/:name/tags', playlistController.updateTags)

// DELETE
router.delete('/playlists/:name', playlistController.delete)
router.delete('/playlists/:name/musics/:title', playlistController.removeMusics)


module.exports = router