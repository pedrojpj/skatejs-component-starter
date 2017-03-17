import 'skatejs-web-components';
import { Component, h } from 'skatejs';

import styles from './component.css';

customElements.define('x-hello', class extends Component {

   static get props() {
      return {
         name: {
            attribute: true
         }
      }
   }

   renderCallback() {
      return [
         <style>{ styles.toString() }</style>,
         <div className='main'>Hello, {this.name}</div>
      ]
   }
});