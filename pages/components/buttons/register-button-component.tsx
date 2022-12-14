import { RegisterBtn } from "../../styles/buttons/register-button-style";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Auth } from "../../services/firebase";


function RegisterButton() {
    /*const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(Auth);

    function SignIn(e: any) {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }*/
    return (
        <RegisterBtn>Registrar</RegisterBtn>
    );
}

export default RegisterButton;