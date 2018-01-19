var playlist = {hello: "song1", there: "song2"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.[artistName];
  return playlist;
}
