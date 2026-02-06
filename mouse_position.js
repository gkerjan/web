// Global count of george clones to set js ids of new elements
var george_count = 1;

/**
 * If the mouse isn't hovering over the reset button, 
 * change the image position to where the mouse is
 * @param {number} x The current x position of the mouse
 * @param {number} y The current y position of the mouse
 */
function handle_mouse_move(x, y) {

  // Get reset button to se if we are currently hovering over it
  var reset = document.querySelector('#reset');

  if (!reset.matches(':hover')) {
    document.documentElement.style.setProperty('--x', (x - 40) + 'px');
    document.documentElement.style.setProperty('--y', (y - 40) + 'px');
  }
}

/**
 * If the mouse isn't hovering over the reset button, 
 * copy a george where the current mouse is
 * @param {number} x The current x position of the mouse
 * @param {number} y The current y position of the mouse
 */
function handle_mouse_click(x, y){

  // Get reset button to se if we are currently hovering over it
  var reset = document.querySelector('#reset');

  if (!reset.matches(':hover')) {
    // Clone the george element
    var elem = document.querySelector('#george0');
    var clone = elem.cloneNode(true);
    clone.id = 'george' + george_count++;

    // Set the clone's position to the current mouse position
    clone.style.setProperty('left', (x - 40) + 'px')
    clone.style.setProperty('top', (y - 40) + 'px')

    // Insert it above george0 element
    elem.before(clone);
  }
}

/**
 * Deletes all george clones and resets `george_count`
 */
function handle_reset_btn() {

  // Delete each george clone
  for (let index = 1; index < george_count; index++) {
    const george_to_delete = document.getElementById('george' + index)
    george_to_delete.remove()
  }

  // Reset george count
  george_count = 1;
}

// Event listeners for the mouse moving, the page getting clicked
// and the reset button getting clicked
document.addEventListener('mousemove', e => { handle_mouse_move(e.clientX, e.clientY); })
document.addEventListener('click', e => { handle_mouse_click(e.clientX, e.clientY); })

var reset_btn = document.getElementById('reset')
reset_btn.addEventListener('click', handle_reset_btn)