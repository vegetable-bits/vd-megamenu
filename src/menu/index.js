import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';
import save from './save';
import edit from './edit';

registerBlockType(metadata.name, {
	title: __('Mega Menu', 'vd-megamenu'),
	keywords: [
		__('navigation', 'vd-megamenu'),
		__('links', 'vd-megamenu')
	],
	icon: 'menu',
	category: metadata.category,
	attributes: metadata.attributes,
	supports: metadata.supports,
	edit,
	save
});
