<template>
   <stored-ressources :ressources="storedRessources"></stored-ressources>
</template>

<script>

import StoredRessources from './components/learning-ressources/StoredRessources.vue';

export default{
    
    components:{
        StoredRessources,
    },

    data(){
        return{ 
            storedRessources:[
                {
                    id:'official-guide',
                    title:'Official Guide',
                    description:'The Official Guide to Vue.js',
                    link:'https://vuejs.org/v2/guide/'
                },
                {
                    id:'google',
                    title:'Google',
                    description:'Google Search Engine',
                    link:'https://www.google.com'
                },
                {
                    id:'youtube',
                    title:'Youtube',
                    description:'Youtube Video Sharing',
                    link:'https://www.youtube.com'
                }
            ]
    };
    },
    methods:{
        deleteLearningRessource(){
            console.log("AQUIIIII");
        }
    }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>
