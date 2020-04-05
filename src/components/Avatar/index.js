import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from './styles';
import {Box} from '../../layout/Box'

const StyledAvatar=styled(Box)`
  height: ${styles.size};
  width: ${styles.size};
  border-radius: ${styles.borderradius};
  box-shadow: ${props=> props.boxShadow ? props.theme.shadows[props.boxShadow]: ''};
  background-color: ${props => props.theme.colors.mono100};
  background-image: ${props=> props.src ? `url(${props.src})`: ''};
  background-repeat: no-repeat;
  background-position: center;  
  background-size: contain;
`

function Avatar(props) {
	if (props.href) StyledAvatar = StyledAvatar.withComponent(a);
	return <StyledAvatar {...props} loading='lazy' />;
}

Avatar.propTypes = {
	/** Defines the size of avatar */
	size: PropTypes.oneOf(['small','medium','large']),
	/** Defines the border radius of avatar block. It will apply with scale of 4 */
	borderRadius: PropTypes.number,
	/** link of image of the Avatar */
	src: PropTypes.string,
	/** Avatar onclick callback function */
  onClick: PropTypes.func,
  /** For rounded avatar. make it true */
  rounded: PropTypes.bool,
  /** Box shadow levels */
  boxShadow: PropTypes.oneOf([0, 1, 2, 3]),
  /** Add avatar link here if you have */
  href: PropTypes.string
};

Avatar.defaultProps = {
  size: 'medium',
  rounded: false,
  onClick: () => {}
};

export {Avatar};
