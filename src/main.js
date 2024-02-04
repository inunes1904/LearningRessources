import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import ButtonLearnRessource from './components/UI/ButtonLearnRessource.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('button-learn-ressource', ButtonLearnRessource);
app.component('base-dialog', BaseDialog);

app.mount('#app');
