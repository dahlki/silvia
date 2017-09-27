import styled, { css } from 'styled-components';

export const StandardBackgroundImg = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
  color: white;
  background-color: black;
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

const mediaSizes = {
  phone: 420,
  tablet: 768,
  laptop: 1366,
  monitor: 1920 
}

// iterate through the sizes and create a media template
export const media = Object.keys(mediaSizes).reduce((accumulator, label) => {
  const emSize = mediaSizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})


