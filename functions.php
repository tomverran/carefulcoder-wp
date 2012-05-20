<?php
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

/**
 * Scripts for the mood lighting
 * on the blog index page.
 */
function careful_home_js()
{
    if (is_home()) {
        wp_enqueue_script('jquery.xcolor',get_stylesheet_directory_uri().'/js/jquery.xcolor.js',array('jquery'));
        wp_enqueue_script('bg',get_stylesheet_directory_uri().'/js/bg.js',array('jquery.xcolor'));
    }
}

//run our function when it is time to enqueue
add_action( 'wp_enqueue_scripts', 'careful_home_js' );