<template>
    <li>
      <base-card>
        <header>
            <h3>{{ title }}</h3>
            <button-learn-ressource mode="flat" @click="toogleDeleteLearningRessource">Delete</button-learn-ressource>
        </header>
        <p>{{ description }}</p>
        <nav>
            <a :href="link">View Ressource</a>
        </nav>
      </base-card>
  </li>
</template>

<script>


export default{

    emits:['delete-learning-ressource'],
    props:{
        id: String,
        title: String,
        description: String,
        link: String
    },
    data(){
        return{};
    },
    toogleDeleteLearningRessource(){
        console.log("AQUIIIII")
        this.$emit('delete-learning-ressource', this.id);
    }
}
</script>

<style scoped>

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

</style>