<?php
/*
	Plugin Name: jQuery Plugins
	Description: Includes common scripts including sliders, parallax, and animations
	Version: 1
*/

/* STYLES */
wp_enqueue_style('slicknav.css','/wp-content/plugins/scripts/SlickNav/slicknav.css','','3.2','');
wp_enqueue_style('animate','/wp-content/plugins/scripts/animate.css','','','');
wp_enqueue_style('normalize','/wp-content/plugins/scripts/normalize.css','','','');
wp_enqueue_style('font-awesome','/wp-content/plugins/scripts/font-awesome/css/font-awesome.min.css','','4.1.0','');
wp_enqueue_style('slick-slider','/wp-content/plugins/scripts/slick/css/style.css','','1.3.13','');
 
/* SCRIPTS */
wp_enqueue_script( 'bootstrap','/wp-content/plugins/scripts/bootstrap/js/bootstrap.min.js', '','3.2', true );
wp_enqueue_script('slick_nav','/wp-content/plugins/scripts/SlickNav/slicknav.min.js','', '', true );	
wp_enqueue_script('finger','/wp-content/plugins/scripts/finger/finger.js','','',true);
wp_enqueue_script('lettering','/wp-content/plugins/scripts/lettering/lettering.js','','',true); 
wp_enqueue_script('textillate','/wp-content/plugins/scripts/textillate/textillate.js','','',true);
wp_enqueue_script('skrollr','/wp-content/plugins/scripts/skrollr/skrollr.min.js','','',true);
wp_enqueue_script('skrollr-ie','/wp-content/plugins/scripts/skrollr-ie/skrollr.ie.min.js','','',true);
wp_enqueue_script('skrollr-menu','/wp-content/plugins/scripts/skrollr-menu/skrollr.menu.min.js','','',true);

?>
