// https://material.io/design/color/#tools-for-picking-colors
const SCALE = 4;

export default {
	colors: {
		white: '#ffffff',
		black: '#000000',
		// Light Blue
		primary: {
			50: '#E1F5FE',
			100: '#B3E5FC',
			200: '#81D4FA',
			300: '#4FC3F7',
			400: '#29B6F6',
			500: '#03A9F4',
			600: '#039BE5',
			700: '#0288D1',
			800: '#0277BD',
			900: '#01579B'
		},
		secondary: {
			50: '#FAFAFA',
			100: '#F5F5F5',
			200: '#EEEEEE',
			300: '#E0E0E0',
			400: '#BDBDBD',
			500: '#9E9E9E',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121'
		},
		success: {
			50: '#E8F5E9',
			100: '#C8E6C9',
			200: '#A5D6A7',
			300: '#81C784',
			400: '#66BB6A',
			500: '#4CAF50',
			600: '#43A047',
			700: '#388E3C',
			800: '#2E7D32',
			900: '#1B5E20'
		},
		warning: {
			50: '#FFFDE7',
			100: '#FFF9C4',
			200: '#FFF59D',
			300: '#FFF176',
			400: '#FFEE58',
			500: '#FFEB3B',
			600: '#FDD835',
			700: '#FBC02D',
			800: '#F9A825',
			900: '#F57F17'
		},
		error: {
			50: '#FFEBEE',
			100: '#FFCDD2',
			200: '#EF9A9A',
			300: '#E57373',
			400: '#EF5350',
			500: '#F44336',
			600: '#E53935',
			700: '#D32F2F',
			800: '#C62828',
			900: '#B71C1C'
		}
	},

	// Typography
	fontSize: {
		h1: {
			size: '48px',
			lineHeight: '56px',
			as: 'h1'
		},
		h2: {
			size: '36px',
			lineHeight: '48px',
			as: 'h2'
		},
		h3: {
			size: '32px',
			lineHeight: '44px',
			as: 'h3'
		},
		h4: {
			size: '24px',
			lineHeight: '32px',
			as: 'h4'
		},
		body3: {
			size: '20px',
			lineHeight: '28px',
			as: 'p'
		},
		body2: {
			size: '16px',
			lineHeight: '20px',
			as: 'p'
		},
		body1: {
			size: '14px',
			lineHeight: '20px',
			as: 'p'
		},
		caption2: {
			size: '12px',
			lineHeight: '16px',
			as: 'div'
		},
		caption1: {
			size: '10px',
			lineHeight: '12px',
			as: 'div'
		}
	},
	lineHeight: {
		solid: 1,
		title: 1.25,
		copy: 1.5
	},
	fontWeights: {
		lighter: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700
	},
	letterSpacing: {
		tight: '-1px',
		normal: '0px',
		wide: '1px'
	},

	zIndex: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

	sizeOfSpace: value => {
		const values = [].concat(value);
		return values.map(v => (typeof v === 'string' ? v : `${v * SCALE}px`)).join(' ');
	}
};
