<template>
<base-card>
    <button-learn-ressource @click="setSelectedTab('stored-ressources')"
    :mode="storedResButtonMode">Stored Ressources</button-learn-ressource>
    <button-learn-ressource @click="setSelectedTab('add-ressource')"
    :mode="addRessourceButtonMode">Add Ressource</button-learn-ressource>
</base-card>
<component :is="selectedTab"></component>
</template>

<script>
import StoredRessources from './StoredRessources.vue';
import AddRessource from './AddRessource.vue';

export default{
    components:{
        StoredRessources,
        AddRessource
    },
    data(){
        return{
            selectedTab: 'stored-ressources',
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
    provide(){
        return {ressources: this.storedRessources,
                addRessource: this.addNewRessource, 
                deleteRessource: this.deleteLearningRessource};
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-ressources' ? null : 'flat';
        },
        addRessourceButtonMode(){
            return this.selectedTab === 'add-ressource' ? null : 'flat';
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addNewRessource(title, description, link){

            const newLearningRessource = {
                id: new Date().toISOString(),
                title:title,
                description:description,
                link:link
            };
            this.storedRessources.unshift(newLearningRessource);
            this.setSelectedTab('stored-ressources');
        },
        deleteLearningRessource(id){
            console.log("AQUIIIII");
            const ressourceIdx = this.storedRessources.findIndex(ressource => ressource.id === id);
            this.storedRessources.splice(ressourceIdx, 1);
        }
    }
}
</script>