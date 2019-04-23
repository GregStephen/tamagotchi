import axios from 'axios';

const getPetsData = () => axios.get('../db/pets.json');

export default { getPetsData };
