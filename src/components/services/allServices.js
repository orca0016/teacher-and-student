import axios from "axios";


const URL_DATA= "http://localhost:9000";



// for all questions in app
export const getGroupTests = (questId) =>{
    const url = `${URL_DATA}/groupTests/${questId}`;
    return axios.get(url)
}
export const getAllGroupTests = () =>{
    const url = `${URL_DATA}/groupTests`;
    return axios.get(url)
}
export const updateGroupTests = (questId,valueUp) =>{
    const url = `${URL_DATA}/groupTests/${questId}`;
    return axios.put(url , valueUp)
}
export const deleteGroupTests = (questId,valueUp) =>{
    const url = `${URL_DATA}/groupTests/${questId}`;
    return axios.delete(url , valueUp)
    
}
export const createGroupTests = (valueUp) =>{
    const url = `${URL_DATA}/groupTests`;
    return axios.post(url , valueUp)

}



// for all group questions in app
export const getTests = (questId) =>{
    const url = `${URL_DATA}/Tests/${questId}`;
    return axios.get(url)
}
export const getAllTests = () =>{
    const url = `${URL_DATA}/Tests`;
    return axios.get(url)
}
export const updateTests = (questId,valueUp) =>{
    const url = `${URL_DATA}/Tests/${questId}`;
    return axios.put(url , valueUp)
}
export const deleteTests = (questId) =>{
    const url = `${URL_DATA}/Tests/${questId}`;
    return axios.delete(url )
    
}
export const createTests = (valueUp) =>{
    const url = `${URL_DATA}/Tests`;
    return axios.post(url , valueUp)

}

// for all  questions in app
export const getQuestions = (questId) =>{
    const url = `${URL_DATA}/TestQuestions/${questId}`;
    return axios.get(url)
}
export const getAllQuestions = () =>{
    const url = `${URL_DATA}/TestQuestions`;
    return axios.get(url)
}
export const updateQuestions = (questId,valueUp) =>{
    const url = `${URL_DATA}/TestQuestions/${questId}`;
    return axios.put(url , valueUp)
}
export const deleteQuestions = (questId) =>{
    const url = `${URL_DATA}/TestQuestions/${questId}`;
    return axios.delete(url )
    
}
export const createQuestions = (valueUp) =>{
    const url = `${URL_DATA}/TestQuestions`;
    return axios.post(url , valueUp)

}