var app = new Vue({
    // carol rios eje1
    el: '#app',
    data: {
   number1:0,
   number2:0,
    
    },
    methods: {
         validate:function(){
             number1=(this.number2);
             number2=(this.number1);
                 alert("El valor A es igual a "+this.number2+" y "+" el valor B es igual a "+this.number1);
         },

     },
     
})