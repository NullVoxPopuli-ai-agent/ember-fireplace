# <code v-pre>{{array}}</code>

 Using the <code v-pre>{{array}}</code> helper, you can pass arrays directly from the template
 as an argument to your components.
 
 ```js
 import { array } from '@ember/helper';
 
 <template>
   <ul>
   {{#each (array 'Tom Dale' 'Yehuda Katz' @anotherPerson) as |person|}}
     <li>{{person}}</li>
   {{/each}}
   </ul>
 </template>
 ```

