import axios from 'axios';

const getPetsData = () => axios.get('./src/db/pets.json');

export default { getPetsData };
