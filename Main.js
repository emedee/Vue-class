// new Vue({
//     el: '#app',
//     data: {
//         Heading: 'My Profile',
//         firstName: 'Emediong',
//         secondName: 'Ekemini',
//         age: 30
//     },
//     methods: {
//         changeTitle: function(event){
//             this.age = event.target.value;
//         } 
//     }

// })



// new Vue({
//     el: '#app',
//     data: {
//         title: 'Hello World!',
//         link: 'https://google.com',
//         finishedLink: '<a href= "https://google.com">google</a>',
//         Heading: '<h1>End of the class</h1>'
//     },
//     methods: {
//         sayHello: function(){
//             return this.title = 'Hello'
//         }
//     }
// })




// new Vue({
//     el: '#app',
//     data: {
        
//     },
//     methods: {

//     }



// })

// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         counter2: 0,
//         x: 0,
//         y:0,
//         message: 'you loaded this page on ' + new Date().toLocaleString(),
//         seen: true
//     },
//     methods: {
//         // increment: function(step){
//         //     this.counter +=step
            
//         // },
//         // increment2: function(step2){
//         //     this.counter2 +=step2
//         // },
//         update: function(event){
//             this.x=event.clientX
//             this.y=event.clientY
//         }
//     }
// })

// new Vue({
//     el: "#app",
//     data: {
//         message: "i can sing"
//     },
//     methods: {

//     }
// })


new Vue({
    el: '#app',
    data: {
        color: 'true',
        line: 'false',
        user: {
            name: "",
            role: "",
        },
        persons: [
            {name:'wisdom', role:'html dev'},
            {name:'samuel', role:'js dev'},
            {name:'steve', role:'php dev'},
            {name:'joe', role:'python dev'},
            {name:'martha', role:'vue dev'},
        ]
    },
    methods: {
        changeColor() {
            this.color = !this.color
        },
        addUser(){
            this.persons.push(this.user);
        },
        removeItem(i){
            this.persons.splice(i, 1)
        },
        updateItem(id){
            this.user = id
        }
    }
})



