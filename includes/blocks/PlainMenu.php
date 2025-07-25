<?php


namespace VdMegaMenu;


class PlainMenu extends AbstractBlock {

	public function __construct() {
		parent::__construct();
	}

	public function render_callback( $attributes, $content ) {
		$classes = array_merge(
			isset( $attributes['className'] ) ? array( $attributes['className'] ) : array(),
			isset( $attributes['itemsJustification'] ) ? array( 'justify-items-' . $attributes['itemsJustification'] ) : array(),
			isset( $attributes['orientation'] ) ? array( 'is-orientation-' . $attributes['orientation'] ) : array()
		);

		$html = '<nav class="wp-block-vd-plain-menu gw-pm ' . esc_attr( implode( ' ', $classes ) ) . '">';
		$html .= '<ul class="gw-pm__content">';
		$html .= $content;
		$html .= '</ul></nav>';

		return $html;
	}

	protected function setName() {
		$this->name = 'vd-megamenu/plain-menu';
	}

	protected function setStyle() {
		$this->style = 'vd-megamenu-block-style';
	}

	protected function setEditorStyle() {
		$this->editor_style = 'vd-megamenu-block-editor';
	}

	protected function setEditorScript() {
		$this->editor_script = 'vd-megamenu-block';
	}
}
