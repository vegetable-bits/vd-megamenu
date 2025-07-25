<?php

/**
 * Plugin Name: Navigation Block with Mega Menu
 * Plugin URI: https://github.com/vegetable-bits/vd-megamenu/tree/master
 * Description: Build better navigation menus with the WordPress mega menu blocks.
 * Version: 1.1.0
 * Author: John Doe
 * Author URI: https://github.com/vegetable-bits/
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: vd-megamenu
 */

defined( 'ABSPATH' ) || exit;

define( 'VD_MEGAMENU_VERSION', '1.0.7' );
define( 'VD_MEGAMENU_FILE', __FILE__ );

if ( ! function_exists( 'vd_megamenu_init' ) && function_exists( 'register_block_type' ) ) {
	function vd_megamenu_init() {
		include( plugin_dir_path( VD_MEGAMENU_FILE ) . 'includes/BlockRegister.php' );
		new VdMegaMenu\BlockRegister();
	}

	vd_megamenu_init();
}
