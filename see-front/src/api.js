// Array of list Endpoint
let arrayApi =["http://localhost:3000/user/iduser", "http://localhost:3000/user/iduser/activity", "http://localhost:3000/user/iduser/average-sessions", "http://localhost:3000/user/iduser/performance"]

/**
 * Function that make API call
 * @param {*} id the ID is a parameter who is get in the URL
 * @param {*} indexArrayApi this is the number of the index endpoint to make the call on the right API
 * @returns data from call API
 */
export async function callApi(id, indexArrayApi){

    const apiEndPoint = arrayApi[indexArrayApi].replace("iduser", id )
    let result
    try {

    const response = await fetch(apiEndPoint);
      result = await response.json();
      if(!response.ok){
        throw new Error()
      }
      
    } catch (error) {
        result = 0

    }
    if(indexArrayApi === 1){
        return result
    }

    return result.data

}