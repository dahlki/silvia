import styled, { css } from 'styled-components';

export const StyledBackgroundImg = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export function standardStyle(z) {
	const index = z ? z : 'auto'
	return `
		height: 100vh;
		width: 100vw;
		position: absolute;
		z-index: ${index};
	`
}