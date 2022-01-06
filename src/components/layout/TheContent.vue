<template>
<div class="s-content">
     <router-view></router-view>
</div>
              
</template>

// <script>
// import axios from 'axios'
// export default {
//  created() {
//      // goi API la du lieu
//      this.getData();
//  },
//  methods: {
//      /*
//      *lay du lieu
//      *Author NPS

//       */
//      getData(){
//          let me = this;
//      axios
//       .get("http://amis.manhnv.net/api/v1/Employees")
//       .then(function (res) {
//         me.employees = res.data;
//         console.log(res);  
//     })
//     .catch(function (res) {
//         console.log(res);
        
//     });

//      },
//      formatDate(value){
//          if (value) {
//                                         value = new Date(value);

//                                         let date = value.getDate();
//                                         date = date < 10 ? `0${date}` : date;

//                                         let month = value.getMonth() + 1;
//                                         month = month < 10 ? `0${month}` : month;

//                                         let year = value.getFullYear();

//                                         value = `${date}/${month}/${year}`;
//                                         return value;

//                                     } else {
//                                         value = "";
//                                     }

//      }
// //     filters: {
// //      formatDate: function(value) {
// //          if (value) {
// //                                         value = new Date(value);

// //                                         let date = value.getDate();
// //                                         date = date < 10 ? `0${date}` : date;

// //                                         let month = value.getMonth() + 1;
// //                                         month = month < 10 ? `0${month}` : month;

// //                                         let year = value.getFullYear();

// //                                         value = `${date}/${month}/${year}`;
                                        
// //                                         return value;

// //                                     } else {
// //                                         value = "";
// //                                     }
         
// //      }
// //  }

//  },
 


//  data() {
//      return {
//          employees : null,
//      };
//  },
// };
// </script>