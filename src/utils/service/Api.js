import AsyncStorage from '@react-native-async-storage/async-storage';
import  axios  from 'axios';
import { Alert } from 'react-native';

export const apiUrl="https://mcfa-backend.onrender.com/api/"
export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  
  export const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

 export const LoadProfile = async () => {
  const userData =await getData("userData")
    console.log("Loading",{...userData})

    if(userData){
       axios.get(apiUrl + "profile/"+userData._id, ).then(async (e) => {
        console.log(e.data)
        await saveData("userData",e.data)
    }).catch((err) => {
        console.log(err.data)
        Alert.alert(err.data?.msg || "something wrong")
    })
    }
   
}

export const getUser = async (id) => {
 
  let ss=""
   
     const aa=await  axios.get(apiUrl + "getUser/"+id, ).then(async (e) => {
        console.log(e.data.firstname)
        ss =e.data.firstname+" "+e.data.lastname
        return e.data.firstname+" "+e.data.lastname
    }).catch((err) => {
        console.log(err.data)
        Alert.alert(err.data?.msg || "something wrong")
    })
console.log(JSON.stringify(aa,null,2))

    return ss
   
}
  