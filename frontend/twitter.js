const followToggle = require('./follow_toggle.js');

$('document').ready(() => {
  $buttons = $('button');
  $buttons.each( (index, el) => {
    $button = new followToggle(el);
    $button.data('idx', index);
  });
});