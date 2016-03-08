var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $h2 = $('h2');
var $img = $('img');
var $ul = $('ul');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');

$h1.addClass('logo');
$h1.removeClass('.big-heading');

$main.addClass('wrapper');

$('main p:first-child').addClass('intro');

$h2.addClass('slug-head');

$('main: ul').addClass('slug-list');

$img.addClass('slug-img');

$('ul:first-child').addClass('slug-list-first');

$('ul:last-child').addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('.big-label');

$ul.show('ul: last-child');
