const app = new Vue({
    el: '#app',
    data(){
        return{
            x: "",
            y: "",
            nowClick:false
        }
    },
    methods:{
        mouseDown(e){
            console.log(e.offsetX, e.offsetY);
            this.x = e.offsetX;
            this.y = e.offsetY;
            this.nowClick = true;
        },
        mouseUp(e){
            this.nowClick = false;
        }

    }
})