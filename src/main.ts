import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faCaretDown,
  faCalendar,
  faDownload,
  faCheck,
  faAnglesLeft,
  faAnglesRight,
  faCaretLeft,
  faCaretRight
  // faLocationDot,
  // faUser,
  // faUserGroup,
  // faBuilding
} from '@fortawesome/free-solid-svg-icons'

/**
 * List of font-awesome icons being used in the app
 * Note: There are some icons that are not exactly the same with figma design
 *  due to some icons are available in pro.
 *  Commented icons are the alternative icons used during the development
 *  but I've decided to export SVG from figma.
 */
library.add(
  faMagnifyingGlass,
  faCaretDown,
  faCalendar,
  faDownload,
  faCheck,
  faAnglesLeft,
  faAnglesRight,
  faCaretLeft,
  faCaretRight
  // faLocationDot,
  // faUser,
  // faUserGroup,
  // faBuilding
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
