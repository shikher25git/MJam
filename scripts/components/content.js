const state = require("../state")

const content_frame = new Vue({
  el: ".main-frame",
  data: {
    artist: "",
  },
  computed: {
    artistSongs(){
      return state
    },
    current(){
      return state.nowplaying.src
    },
    frame(){
      return state.contentFrame
    },
    all_songs(){
      return Object.values(state.songsMap)
    },
    recent_songs(){
      return state.recentSongs
    }
  },
  methods: {
    playMe: function (src) {
      state.play([src])
    },
    pauseMe: function () {
      state.pause()
    },
    updateFrame: function (frame) {
      this.frame = frame
    },
    showArtists: function (artists) {
      artists_list = artists.split(", ")
      songs = []
      console.log(artists_list)
      this.artist = {
        name: artists,
        songs: right_frame.artist_songs[artists_list[0].trim()]
      }

      song_list = [];
      for (let i = 0; i < this.artist.songs.length; i++) {
        song_list.push(this.artist.songs[i].src)
      }

      for (let i = 1; i < artists_list.length; i++) {
        songs = right_frame.artist_songs[artists_list[i].trim()]
        for (let j = 0; j < songs.length; j++) {
          if (song_list.indexOf(songs[j].src) == -1) {
            this.artist.songs.push(songs[j])
            song_list.push(songs[j].src)
          }
        }
      }
    }
  }
})

window.global = {
  content_frame
}

module.exports = content_frame