import theme from '../../theme';
import { getColorFromAppearance } from '../../utils/stylesHelper';

export default {
	size(props) {
		if (props.size === 'small') return theme.sizeOfSpace('16px');
		if (props.size === 'medium') return theme.sizeOfSpace('18px');
		else return '16px';
	},

	borderColor(props) {
		if (props.appearance) return getColorFromAppearance(theme, props.appearance, 400);
		else return '';
	},

	backgroundColor(props) {
		if (props.appearance) return getColorFromAppearance(theme, props.appearance, 500);
		else return '';
	},

	pointerEvents(props) {
		if (props.disabled) return 'no-drop';
		return 'pointer';
	},

	hover: {
		borderColor(props) {
			if (props.appearance) return getColorFromAppearance(theme, props.appearance, 500);
			else return '';
		}
	}
};
