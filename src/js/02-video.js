import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_TIMING = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayTiming, 1000));

function onPlayTiming(data) {
  const seconds = data.seconds;
  localStorage.setItem(STORAGE_TIMING, seconds);
  //   console.log(seconds);
}

function updateTiming() {
  const currentTime = localStorage.getItem(STORAGE_TIMING);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
updateTiming();
