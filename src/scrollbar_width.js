/*
 * Created by Michal Cupak on 03.03.2020.
 */

// Returns width of default system scrollbar (depends on OS)
export default function scrollbar_width () {
  const scrollDiv = document.createElement('div')
  scrollDiv.className = 'scrollbar-measure'
  document.body.appendChild(scrollDiv)

  // Get the scrollbar width
  const scrollbar_width = scrollDiv.offsetWidth - scrollDiv.clientWidth
  // console.log("Scrollbar width")
  // console.warn(scrollbar_width) // Mac:  15

  // Delete the DIV
  document.body.removeChild(scrollDiv)

  return scrollbar_width
}
