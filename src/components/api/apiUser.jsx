import axios from "axios"

// Get datas 
const API_KEY_GET = 'http://localhost:3030/users'

export const getAllUser = async () => {
    try{
        return await axios.get(API_KEY_GET)
    } catch(e) {
        console.log('Error while calling get user api', e.message)
    }
}

export const postData = async (data) => {
    try{
        return await axios.post(API_KEY_GET, data)
    } catch(e) {
        console.log('Error while calling post user api', e.message)
    }
} 

export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_KEY_GET}/${id}`, data)
    } catch(e){
        console.log('Error while calling edit user api', e.message)
    }
}

export const deleteUser = (id) => {
    try{
        return axios.delete(`${API_KEY_GET}/${id}`)
    }catch (e) {
        console.log('Error while calling delete user api', e.message)
    }
}