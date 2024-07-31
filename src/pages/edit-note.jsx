import { useLocation } from "wouter";
import { useContext, useState } from "react";
import DefaultLayout from "../components/default-layout";
import { NotesContext } from "../context/notes";
import { useForm } from "react-hook-form";

function editNote({ id }) {
	const [, navigateTo] = useLocation();
	const { notes, editNote, deleteNote } = useContext(NotesContext);
	let note = notes.find((note) => note.id === Number(id));

	const {
		register,
		handleSubmit,
		formState: { isDirty },
	} = useForm({
		defaultValues: {
			title: note.title,
			content: note.content,
		},
	});

	function onEditNote(data) {
		editNote(parseInt(id), data);
		navigateTo("/");
	}
	function onDeleteNote() {
		deleteNote(parseInt(id));
		navigateTo("/");
	}
	return (
		<DefaultLayout canGoBack>
			<form onSubmit={handleSubmit(onEditNote)}>
				<div className="editBox">
					<label className="editHeader">Start editing your note: </label>

					<label className="title">Title: </label>
					<input
						type="text"
						className="editTitle"
						{...register("title", { required: true })}
					/>

					<label className="content">Content: </label>
					<textarea
						type="text"
						id="edit"
						className="editContent"
						{...register("content", { required: true })}
					/>
				</div>
				<button className="done-btn" type="submit" disabled={!isDirty}>
					Done
				</button>
			</form>
			<button
				className="done-btn"
				id="delete"
				type="submit"
				onClick={onDeleteNote}
			>
				Delete Note
			</button>
		</DefaultLayout>
	);
}
export default editNote;
