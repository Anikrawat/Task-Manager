import React,{useContext,useState} from "react"
import { getDatabase, ref, child, get} from "firebase/database";
import { getAuth,createUserWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import {app} from "../Firebase";



const AppContext = React.createContext();

const AppProvider = ({children}) => {

      const [itemName, setItemName] = useState("");

      const [items,setItems] = useState([])

      const [dataObject,setDataObject] = useState(null)

      const db = getDatabase();

      const [alertcomp,setAlert] = useState(false)

      const [registerAlert,setRegisterAlert] = useState(false)

      const [forgotPassMail,setForgotPassMail] = useState("")
  
      const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Password: "",
        confirmPassword: "",
      });

      const [signInData, setSignInData] = useState({
        Email: "",
        Password: ""
      })
      
      let name, value,signInName,signInValue;
      
      const auth = getAuth(app)
      
      const putData = (e) => {

        e.preventDefault()

        if (userData.Password !== userData.confirmPassword) {
          setTimeout(() => {
            setRegisterAlert(false)
          },2000)
          setRegisterAlert(true)
          return
        }

        else{
        const { Email, Password } = userData;


        createUserWithEmailAndPassword(auth,Email,Password).then((result) => {
          setTimeout(() => {
            setAlert(false)
          },4000)
          setAlert(true)
          console.log(result)
        }).catch((error)=>{
          alert(error)
        })
      }
      setUserData({
        Name: "",
        Email: "",
        Password: "",
        confirmPassword: "",
      });
      }

      const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value });
      };

    
      const getSignInData = (e) => {
        signInName = e.target.name;
        signInValue = e.target.value;
        setSignInData({...signInData, [signInName]: signInValue})
      }
      
      //Forgot password

      const mailForgotPass = (e) => {
        setForgotPassMail(e.target.value)
      }

      const forgotPass = (e) => {

        e.preventDefault()

        sendPasswordResetEmail(auth,forgotPassMail).then((result) => {
          alert("Check your Email")
        }).catch((err) => {
          alert(err)
        })
      }


      
      

      //List Functions

      const newTask = (e) => {
        setItemName(e.target.value);
      }

      
      const addTask = () => {
        setItems((oldValue) => {
          return [...oldValue,itemName]
        })
        setItemName("")
      }
      
      const DeleteListItem = (id) => {
        console.log('deleted')

        setItems((oldItems) => {
          return oldItems.filter((arrElement,Index) => {
            return id !== Index
          })
        })
      }


      const gettingTheData = () => {
          const dbRef = ref(db);
            get(child(dbRef, `users/`)).then((snapshot) => {
              if (snapshot.exists()) {
              setDataObject(snapshot.val())
              
            }
            else{
              console.log('not found')
            }
            }).catch((error) => {
              console.error(error);
            });
      }
      

    return <AppContext.Provider value={{dataObject,gettingTheData,userData,newTask,DeleteListItem,addTask,items,setItems,itemName,forgotPass,registerAlert,mailForgotPass,forgotPassMail,getUserData,putData,alertcomp,getSignInData,signInData}}>
        {children}
    </AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppProvider,useGlobalContext,AppContext}