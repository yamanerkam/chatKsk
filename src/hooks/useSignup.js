import {useState, useEffect} from 'react'
import { useAuth } from '../context/AuthContext'


export const useSignup = () => {
    const {auth} = useAuth()
    const [error,
        setError] = useState(null)
    const [isPending,
        setIsPending] = useState(false)
    const [cancelled,
        setCancelled] = useState(false)

    const signup = async(email, password) => {
        setError(null)
        setIsPending(true)
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            if (!res) {
                throw new Error('errorrrrr')
            }

            // upload user thumbnail
            //const uploadPath = `thumbnail/${res.user.uid}/${thumbnail.name}`
            //const image = await projectStorage.ref(uploadPath).put(thumbnail)
            //const imgUrl = await image.ref.getDownloadURL()

           // await res.user.updateProfile({displayName,photoURL:imgUrl})


            // create a user document
          /*  await projectFirestore.collection('users').doc(res.user.uid).set({
                online:true,
                displayName,
                photoURL:imgUrl
            }) 


            dispatch({type: ACTIONS.SIGNUP, payload: res.user})
            if (!cancelled) {
                setIsPending(false)
                setError(null)
                console.log(res)

            }
        } catch (err) {
            if (!cancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }

    }
    useEffect(() => {
        return () => setCancelled(true)
    }, []) */
}
    catch(err){
        console.log(err)
    }


        
}
    return {error, isPending, signup}

}