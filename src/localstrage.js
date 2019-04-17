import Vue from "vue";
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage);

const LocalStrage = {
    localStrage:{
        objectKey:{
            type: Object,
            default: {
                val: 'default'
            }
        }
    },
    methods: {
        
    }
}

export default LocalStrage