Vue.createApp({
    data() {
        return {
            message: null,
            times: null,
            result:""
        }
    },
    methods: {
        multiply(message,times) {
            if (times>0)
            {for(i=0;i<times;i++)
                {
                    this.result = this.result + message;
                }
            }
                
            else
                this.result = "times cant be negative number"
        }
    }
}).mount("#app")