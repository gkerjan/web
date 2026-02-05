var move = true;

function handle_mouse_move(x, y) {
  if (move) {
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
  }
}

function handle_mouse_click(x, y){
  move = !move;
  if (move) {
    change_follow()
  } 
  if (!move) {
    document.documentElement.style.setProperty('--time', '0.15s');
  }
  handle_mouse_move(x,y)
}

async function change_follow() {
  await new Promise(resolve => setTimeout(resolve, 150));
  document.documentElement.style.setProperty('--time', '0s');
}

document.addEventListener('mousemove', e => { handle_mouse_move(e.clientX, e.clientY); })
document.addEventListener('click', e => { handle_mouse_click(e.clientX, e.clientY); })