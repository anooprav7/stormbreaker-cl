import { boxShadow } from 'styled-system';

export default {
	background(props) {
		const { backgroundColor, bg, background, theme } = props;
		if (backgroundColor) return theme.colors[backgroundColor][props.colorLevel];
		if (bg) return theme.colors[bg][props.colorLevel];
		if (background) return theme.colors[background][props.colorLevel];
	},

	color(props) {
		if (props.color) return props.theme.colors[props.color][props.colorLevel];
	},

	borderColor(props) {
		const { theme, bc, borderColor, bcLevel } = props;
		if (borderColor) return theme.colors[borderColor][bcLevel];
		if (bc) return theme.colors[bc][bcLevel];
	},

	boxShadow(props) {
		if (props.boxShadow) return props.theme.shadows[props.boxShadow];
	}
};
