export default {
	boxShadow(props) {
		if (props.boxShadow) return props.theme.shadows[props.boxShadow];
	}
};
