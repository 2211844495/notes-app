import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "wouter";
import Home from "./pages/home";
import Edit from "./pages/edit-note";
import Add from "./pages/add-note";
import "./index.css";
import { NotesProvider } from "./context/notes";

const Routs = () => {
	return (
		<>
			<Route path="/" component={Home} />
			<Route path="/edit/:id">{(params) => <Edit id={params.id} />}</Route>
			<Route path="/add" component={Add} />
		</>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NotesProvider notes={[]}>
			<Routs />
		</NotesProvider>
	</React.StrictMode>
);
