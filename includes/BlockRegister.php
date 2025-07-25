<?php


namespace VdMegaMenu;


class BlockRegister {

	public function __construct() {
		$this->load_blocks();
		add_action( 'init', [ $this, 'register_blocks' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_frontend_assets' ] );
	}

	private function register_blocks_assets() {
		wp_register_script(
			'vd-megamenu-block',
			plugins_url( 'build/index.js', VD_MEGAMENU_FILE ),
			[
				'wp-i18n',
				'wp-editor',
				'wp-element',
				'wp-blocks',
				'wp-components',
				'wp-polyfill'
			],
			VD_MEGAMENU_VERSION,
			true
		);

		wp_register_style(
			'vd-megamenu-block-editor',
			plugins_url( 'build/index.css', VD_MEGAMENU_FILE ),
			[],
			VD_MEGAMENU_VERSION
		);

		wp_register_style(
			'vd-megamenu-block-style',
			plugins_url( 'build/style-index.css', VD_MEGAMENU_FILE ),
			['dashicons'],
			VD_MEGAMENU_VERSION
		);
	}

	private function load_blocks() {
		include_once( plugin_dir_path( VD_MEGAMENU_FILE ) . 'includes/blocks/AbstractBlock.php' );
		include_once( plugin_dir_path( VD_MEGAMENU_FILE ) . 'includes/blocks/MegaMenu.php' );
		include_once( plugin_dir_path( VD_MEGAMENU_FILE ) . 'includes/blocks/MegaMenuItem.php' );
		include_once( plugin_dir_path( VD_MEGAMENU_FILE ) . 'includes/blocks/PlainMenu.php' );
		include_once( plugin_dir_path( VD_MEGAMENU_FILE ) . 'includes/blocks/PlainMenuItem.php' );
	}

	public function register_blocks() {
		$this->register_blocks_assets();

		new MegaMenu();
		new MegaMenuItem();
		new PlainMenu();
		new PlainMenuItem();
	}

	public function enqueue_frontend_assets() {
		wp_enqueue_script( 'vd-megamenu-block-frontend', plugins_url( 'build/frontend.js', VD_MEGAMENU_FILE ), [ 'jquery' ], VD_MEGAMENU_VERSION, true );
	}
}