import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import ButtonLearnRessource from './components/UI/ButtonLearnRessource.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('button-learn-ressource', ButtonLearnRessource);

app.mount('#app');
