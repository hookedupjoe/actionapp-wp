<?php
/**
 * Designer resources entrypoint
 */

function dequeue_my_css() {
    wp_dequeue_style('dashicons');
    wp_dequeue_style('admin-bar');
    wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts','dequeue_my_css',10);

remove_action('wp_head', '_admin_bar_bump_cb');

include ACTIONAPP_WP_DIR. '/apps/DevConsole/index.php';
?>
