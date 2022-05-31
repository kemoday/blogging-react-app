import React, { useState } from "react";
import "./styles/AddPost.css";
import Loader from "react-loader-spinner";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { signin } from "../../apis/users";
import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";

export default function SignIn({ history }) {
  document.title = "BLOGGING - SignIn";

  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    setLoading(true);
    setError(null);
    event.preventDefault();
    signin(formData)
      .then((user) => {
        setUser(user);
        setLoading(false);
        history.push("/user/dashboard/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setLoading(false);
        setError(error.response.data.message);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="signin">
      <div className="form-wrapper">
        <h1 className="text-2xl font-bold mb-2">Sign In to your account</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={60}
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            required
            maxLength={60}
            type="password"
            name="password"
            id="password"
          />

          <div className="publish-btns">
            {loading ? (
              <Loader type="TailSpin" color="#fFFF" height={20} width={20} />
            ) : (
              <Button action={() => {}} text="Submit" />
            )}
          </div>
          <div>
            don't have an account?{" "}
            <Link className="font-bold hover:underline" to="/user/signup">
              Sign Up
            </Link>{" "}
            now.
          </div>
          {error && (
            <p className="box-border rounded px-4 py-2 shadow-sm border-2 text-red-400 font-bold bg-red-200">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
