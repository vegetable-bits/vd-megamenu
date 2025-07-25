import { BaseControl, ColorIndicator } from '@wordpress/components';
import { ColorPalette } from '@wordpress/block-editor';

function MPMegaMenuColorPalette(args) {
	const {
		label,
		color,
		disableCustomColors,
		clearable,
		onChange
	} = args;

	return (
		<BaseControl>
			<BaseControl.VisualLabel>
				{label}
				{(color) && (
					<ColorIndicator
						colorValue={color}
						style={{
							verticalAlign: 'text-bottom',
							background: color
						}}
					/>
				)}
			</BaseControl.VisualLabel>
			<ColorPalette
				value={color}
				onChange={onChange}
				disableCustomColors={disableCustomColors}
				clearable={clearable}
			/>
		</BaseControl>
	)
}

export default MPMegaMenuColorPalette;