import { useLocalStorageState } from "ahooks";
import { createContext } from "react";

const notes = [
	{
		id: 1,
		title: "Note 1",
		content: "First note.",
	},
	{
		id: 2,
		title: "Note 2",
		content: "Second note.",
	},
	{
		id: 3,
		title: "Note 3",
		content: "Third note.",
	},
];

export const NotesContext = createContext({
	notes,
	addNote(data) {},
	editNote(id, data) {},
	deleteNote(id) {},
	clearNotes() {},
});

export function NotesProvider(props) {
	const [notes, setNotes] = useLocalStorageState("@notes-app/notes", {
		defaultValue: props.notes,
	});

	function addNote(data) {
		const copy = [...notes];
		copy.push({
			id: notes.length + 1,
			...data,
		});
		setNotes(copy);
	}

	function editNote(id, data) {
		const copy = [...notes];
		const index = copy.findIndex((note) => note.id === id);
		if (index >= 0) {
			copy[index] = {
				...copy[index],
				...data,
			};
			setNotes(copy);
		}
	}

	function deleteNote(id) {
		const copy = [...notes];
		const index = copy.findIndex((note) => note.id === id);
		if (index >= 0) {
			copy.splice(index, 1);
			setNotes(copy);
		}
	}

	function clearNotes() {
		setNotes([]);
	}

	return (
		<NotesContext.Provider
			value={{
				notes,
				addNote,
				clearNotes,
				editNote,
				deleteNote,
			}}
		>
			{props.children}
		</NotesContext.Provider>
	);
}
export const NotesConsumer = NotesContext.Consumer;
