<?php
/**
 * Action App Designer - Template - Developer Console Entrypoint
 * 
 * Copyright (c) 2021-2024 Joseph Francis / hookedup, inc. 
 *
 * This code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This header and all notices must be kept intact.
 *
 * @author Joseph Francis
 * @package actionappwp
 * @since actionappwp 1.0.0
 */

function dequeue_my_css() {
    wp_dequeue_style('dashicons');
    wp_dequeue_style('admin-bar');
    wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts','dequeue_my_css',10);

remove_action('wp_head', '_admin_bar_bump_cb');

include ACTIONAPP_WP_DIR. '/apps/AppConsole/index.php';
?>
