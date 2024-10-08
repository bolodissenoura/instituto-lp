export default function getScrollAnimation() {
	return ({
    offscreen: {
      y: 75,
      opacity: 0,
    },
    onscreen: ({duration = 2} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}