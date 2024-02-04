<template>
    <ul >
        <LearningRessource v-for="res in ressources" :key="res.id" :id="res.id"
        :title="res.title" :description="res.description" :link="res.link" 
        @delete-learning-ressource="deleteLearningRessource">
        </LearningRessource>
    </ul>
</template>

<script>
import LearningRessource from './LearningRessource.vue';

export default{

    components:{
        LearningRessource,
    },

    emits:['delete-learning-ressource'],
    inject:['ressources'],
    data(){
        return{};
    },
    methods:{
        deleteLearningRessource(){
            console.log("AQUIIIII");
        }
    }
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
