import { collection, addDoc, getDocs, doc } from 'firebase/firestore';
import {app, storage, database} from '../firebaseConfig';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';

const collectionRef = collection(database, "User");


export const addUser =  async ({...data}, imageFile) => {

    let userExists = await checkIfUserExists(data);
  
   
    return new Promise((resolve, reject) => {
        if(!userExists) {
            let result = uploadUserImage(imageFile).then(imgUrl => {
                return addDoc(collectionRef, {...data, image_url: imgUrl});
            });

            resolve(result);
        
        } else {
            reject(new Error("User already exists"));
        }
    });



    // return result;

    // const image_url = await uploadUserImage(imageFile);

    // let result = await addDoc(collectionRef, {...data, image_url: image_url});

    // return result;
}

export const getUserAuth = async ({...loginCred}) => {
    const {email, password} = loginCred;

    let results = await getDocs(collectionRef).then(res => {
        return res.docs.map(item => item.data());
    });

    let user = results.find(data => data.email === email);

    return new Promise((resolve, reject) => {
        if(user !== undefined && user.password === password) {
            resolve(user);
        } else if(user === undefined) {
            reject(new Error(`User with email: ${email} does not exist`));
        } else if(user.password !== password) {
            reject(new Error("Wrong password provided!"));
        }
    })  
    
}

export const getUserByEmail =  ({ ...loginCred }) => {

    const { email } = loginCred;

    let results = getDocs(collectionRef).then(res => {
        return res.docs.map(item => item.data());
    });

    let user = results.find(data => data.email === email);
    
    return user;
}

export const checkIfUserExists = async ({ ...loginCred }) => {

    const { email } = loginCred;

    let results = await getDocs(collectionRef).then(res => {
        return res.docs.map(item => item.data());
    });

    let userExists = results.some(data => data.email === email);
    
    return userExists;
}

export const uploadUserImage = async (fileObj) => {
    

    let fileToSaveRef = ref(storage, fileObj.name);
    let uploadFile = uploadBytesResumable(fileToSaveRef, fileObj);
    uploadFile.on(
        'state_changed',
        (snapshot) => {
            let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log("uploading is " + progress + " % done");
        },
        (err) => {
            console.log(err.message);
        },
        () => {
            getDownloadURL(uploadFile.snapshot.ref).then((dUrl) => {
                console.log("download image from ", dUrl);
            }) 
        }
    );

    let getProgress = () => (uploadFile.snapshot.bytesTransferred/uploadFile.snapshot.totalBytes) * 100;

    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        let expectedValue = 100;
        let checkInterval = 1000;
        let timeout = 10000;

        const checkValue = setInterval(() => {
            const currentValue = getProgress();
            console.log("Checking value:", currentValue);

            if (currentValue === expectedValue) {
                let imgUrl = getDownloadURL(uploadFile.snapshot.ref).then(dUrl => {
                    return dUrl;
                })
                clearInterval(checkValue);
                resolve(imgUrl);
            } else if (Date.now() - startTime >= timeout) {
                clearInterval(checkValue);
                reject(new Error("Timeout exceeded while waiting for value."));
            }
        }, checkInterval);
    });
}


