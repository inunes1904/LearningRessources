
import ButtonLearnRessource from '../UI/ButtonLearnRessource.vue';
<template>
<base-dialog v-if="inputIsInvalid" title="Invalid Input" @closeDialog="confirmError">
<template #default>
    <p>Unfortunately, at least one input value is invalid.</p>
    <p>Please review the inputs.</p>
</template>
<template #actions>
    <button-learn-ressource @click="confirmError">OK</button-learn-ressource>
</template>
</base-dialog>
<base-card>
<form @submit.prevent="submitData">
    <div class="form-control"> 
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput"> 
    </div>
    <div class="form-control"> 
        <label for="description">Description</label>
        <textarea id="description" name="description" type="text" ref="descInput"></textarea>
    </div>
    <div class="form-control"> 
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput">
    </div>
    <button-learn-ressource type="submit" >Add Ressource</button-learn-ressource> 
</form>
</base-card>
   

</template>

<script>

export default{
    emits:['add-new-ressource'],
    data(){
        return{
            inputIsInvalid: false,
        };
    },
    methods:{
        submitData(){
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descInput.value;
            const enteredLink = this.$refs.linkInput.value;
            
            console.log("asdas");
            console.log(enteredTitle, enteredDescription, enteredLink); 

            if (enteredTitle.trim() === '' || enteredDescription.trim()  === '' 
            || enteredLink.trim()  === '0'){
                console.log("AQUIIIIIII")
                this.inputIsInvalid = true;
                return;
            }

            this.addRessource(enteredTitle, enteredDescription, enteredLink);
        },
        confirmError(){
            this.inputIsInvalid = false;
        },
    }, 
    inject:['addRessource']
}

</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>