import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMagnifyingGlass,
  faCaretDown,
  faCalendar,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faMagnifyingGlass, faCaretDown, faCalendar, faDownload);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
