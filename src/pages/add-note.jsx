import { useLocation } from "wouter";
import { useContext } from "react";
import DefaultLayout from "../components/default-layout";
import { NotesContext } from "../context/notes";
import { useForm } from "react-hook-form";

function AddNote() {
	const [, navigateTo] = useLocation();
	const { addNote } = useContext(NotesContext);

	const { register, handleSubmit } = useForm();

	function addNewNote(data) {
		addNote(data);
		navigateTo("/");
	}

	return (
		<DefaultLayout canGoBack>
			<form onSubmit={handleSubmit(addNewNote)}>
				<div className="editBox">
					<label className="editHeader">Write a new note: </label>
					<label className="title">Title: </label>
					<input
						type="text"
						className="editTitle"
						{...register("title", {
							required: true,
						})}
					/>
					<label className="content">Content: </label>
					<textarea
						type="text"
						id="edit"
						className="editContent"
						{...register("content", {
							required: true,
						})}
					/>
				</div>
				<button className="done-btn" type="submit">
					Done
				</button>
			</form>
		</DefaultLayout>
	);
}
export default AddNote;
