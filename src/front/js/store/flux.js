import toast, { Toaster } from 'react-hot-toast';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: null,
			token: localStorage.getItem("token") || null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			register: async (name, email, password) => {

				const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ name: name, email: email, password: password })
				});

				const data = await resp.json();

				if (resp.ok) {
					localStorage.setItem("token", data.token);
					setStore({ token: data.token, user: data.user });

					toast.success("User created successfully 🎉");
				} else {
					toast.error("Error creating user");
				}


			},

			login: async (email, password) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email: email, password: password })
				});

				const data = await resp.json();



				localStorage.setItem("token", data.access_token);
				setStore({ token: data.access_token });
				setStore({ user: data.user });


				if (!resp.ok) {
					toast.error("Wrong password or email 🙅🏽‍♂️");
					return false;
				} else {
					toast.success("User logged in successfully 🎉");
				}
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null, user: null });
				toast.success("Logged out successfully 🎉");
			}
		}

	};
};

export default getState;
