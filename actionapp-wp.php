<?php
/**
 * actionapp-wp.php
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
 *
 * Plugin Name: Action App for WordPress
 * Plugin URI: https://github.com/hookedupjoe/actionapp-wp
 * Description: An advanced development environment for WordPress.
 * Author: Joseph Francis
 * Author URI: https://www.hookedup.com
 * Donate-Link: https://www.hookedup.com/
 * Text Domain: actapp
 * License: GPLv3
 * 
 * Version: 1.0.41
 */
define( 'ACTIONAPP_WP_CORE_VERSION', '1.0.41' );

if ( !defined( 'ABSPATH' ) ) {
	exit;
}

define( 'ACTIONAPP_WP_FILE', __FILE__ );

if ( !defined( 'ACTIONAPP_WP_DIR' ) ) {
	define( 'ACTIONAPP_WP_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
}

if ( !defined( 'ACTIONAPP_WP_URL' ) ) {
	define( 'ACTIONAPP_WP_URL', plugins_url( 'actionapp-wp' ) );
}

if ( !defined( 'ACTAPP_CORE_URL' ) ) {
	define( 'ACTAPP_CORE_URL', plugins_url( 'actionapp-wp' ) );
}

if ( !defined( 'ACTIONAPP_WP_IMAGE_PATH' ) ) {
	define( 'ACTIONAPP_WP_IMAGE_PATH', ACTIONAPP_WP_URL.'/images/' );
}


if ( !defined( 'ACTIONAPP_WP_BASE_DIR' ) ) {
	define( 'ACTIONAPP_WP_BASE_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
}

if ( !defined( 'ACTIONAPP_WP_BASE_URL' ) ) {
	define( 'ACTIONAPP_WP_BASE_URL', plugins_url( 'actionapp-wp' ) );
}

if ( !defined( 'ACTIONAPP_WP_CORE_LIB_URL' ) ) {
	define( 'ACTIONAPP_WP_CORE_LIB_URL', ACTIONAPP_WP_BASE_URL . '/core' );
}

if ( !defined( 'ACTIONAPP_WP_CORE_LIB' ) ) {
	define( 'ACTIONAPP_WP_CORE_LIB', ACTIONAPP_WP_BASE_DIR . '/core' );
}

require_once ACTIONAPP_WP_BASE_DIR . '/cls/ActAppCommon.php';

//---- Blocks Module
define( 'ACTIONAPP_WP_BLOCKS_VERSION', '1.0.3' );
define( 'ACTIONAPP_WP_BLOCKS_FILE', __FILE__ );

if ( !defined( 'ACTIONAPP_WP_BLOCKS_DIR' ) ) {
	define( 'ACTIONAPP_WP_BLOCKS_DIR', ACTIONAPP_WP_BASE_DIR );
}

if ( !defined( 'ACTIONAPP_WP_BLOCKS_URL' ) ) {
	define( 'ACTIONAPP_WP_BLOCKS_URL', ACTIONAPP_WP_BASE_URL );
}

require_once ACTIONAPP_WP_BLOCKS_DIR . '/cls/ActAppWidgetManager.php';
require_once ACTIONAPP_WP_BLOCKS_DIR . '/cls/ActAppWidgetManangerDataController.php';

require_once ACTIONAPP_WP_DIR . '/cls/ActAppDesignerDataController.php';
require_once ACTIONAPP_WP_DIR . '/cls/ActAppDesigner.php';
