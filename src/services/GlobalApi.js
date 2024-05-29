import axios from "axios";
import {API_URL} from "../lib/Enviroments"

const BASE_URL='http://localhost:3000/create-order';
// const BASE_URL='https://tubeguruji-admin.herokuapp.com/api'

const getPost=axios.get(BASE_URL+'/create-order');

export default{
    getPost,

}
