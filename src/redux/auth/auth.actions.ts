import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	registerStart,
	registerError,
	registerSuccess,
	loginStart,
	loginError,
	loginSuccess,
	// logoutStart,
	logoutSuccess,
	// logoutError,
} from "./auth.slice";
import { UserData } from "./auth.types";
import {toast } from "react-toastify";

interface AuthResponse {
	error: boolean;
	message: string;
	user: UserData;
}

const userRegister = createAsyncThunk(
	"auth/register",
	async (userdata: UserData, { dispatch }) => {
		try {
			dispatch(registerStart());
			const response = await fetch(
        "https://frantic-cow-shrug.cyclic.app/api/oxyzen/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );

			const data: AuthResponse = await response.json();
			console.log(data,"--------")
			toast.success(data.message);
			dispatch(registerSuccess(data.user));
		} catch (err) {
			dispatch(registerError(`${err}`));
		}
	},
);

const userLogin = createAsyncThunk(
	"auth/login",
	async (userdata: UserData, { dispatch }) => {
		
		try {
			dispatch(loginStart());
			const response = await fetch(
        "https://frantic-cow-shrug.cyclic.app/api/oxyzen/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );

			const data: AuthResponse = await response.json();
			toast.success(data.message);

			dispatch(loginSuccess(data.user));
		} catch (err) {
			dispatch(loginError(`${err}`));
		}
	},
);

const userLogout = createAsyncThunk(
	"auth/logout",
	async (_, { dispatch }) => {
		// try {
		// 	dispatch(logoutStart());
		// 	const response = await fetch(
		// 		"http://localhost:8080/api/v1/auth/logout");

		// 	const data: AuthResponse = await response.json();
		// 	console.log(data)
		// 	toast.success(data.message);
		// 	dispatch(logoutSuccess());
		// } catch (err) {
		// 	dispatch(logoutError(`${err}`));
		// }
		toast.success("success");
    dispatch(logoutSuccess());
	},
);


export { userRegister, userLogin,userLogout };
