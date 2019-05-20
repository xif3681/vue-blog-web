<template>

   <div id="postedit" class="postedit">
     <div >
        <h1>This is an postedit page</h1>
    </div>
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>

</template>
<script>
// import VueFroala from 'vue-froala-wysiwyg';

// export default {
//  name: 'postedit',
//   data () {
//     return {
//       config: {
//         events: {
//           'froalaEditor.initialized': function () {
//             console.log('initialized')
//           }
//         }
//       },
//       model: 'Edit Your Content Here!'
//     }
//   }
// }
    

</script>