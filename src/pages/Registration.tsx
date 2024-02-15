import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { TextInput } from "../components/ui/Input";
import { OptionButton, RegisterButton } from "../components/ui/Button";
import { RegistrationWrapper } from "./Registration.style";
import RegisterLogo from "../assets/register-logo.svg";
import { useNavigate } from "react-router";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Registration() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { signup, currentUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      if (form.email != null && form.password != null) {
        const userCredential = await signup(form.email, form.password);
        const user = userCredential.user;

        const userData = {
          uid: user.uid,
          email: user.email,
          userName: form.userName,
        };

        const db = getFirestore();
        await addDoc(collection(db, "userdata"), userData);

        nav("/");
      }
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <RegistrationWrapper>
        <img src={RegisterLogo} alt="Logo" />
        <h1>
          <span className="topHeader">Create Your</span> Free Account
        </h1>
        <form onSubmit={handleSubmit}>
          <p>Your Name</p>
          <TextInput name="userName" type="text" onChange={handleChange} />
          <p>Email</p>
          <TextInput name="email" type="email" onChange={handleChange} />
          <p>Password</p>
          <TextInput name="password" type="password" onChange={handleChange} />
          <p>Confirm Password</p>
          <TextInput
            name="passwordConfirm"
            type="password"
            onChange={handleChange}
          />
          <br /> <br />
          <RegisterButton disabled={loading} type="submit">
            Register
          </RegisterButton>
        </form>
        <p className="loginText">
          Already have an Account? <a href="/login">Login here!!</a>
        </p>
      </RegistrationWrapper>
    </div>
  );
}

export default Registration;
