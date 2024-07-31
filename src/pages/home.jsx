import { useContext } from "react";
import { Link } from "wouter";
import DefaultLayout from "../components/default-layout";
import { NotesContext } from "../context/notes";
function Home() {
	const { notes, clearNotes } = useContext(NotesContext);
	function onClearNotes() {
		if (!window.confirm("Are you sure?")) return;
		clearNotes();
	}
	return (
		<DefaultLayout>
			<div className="wrapper">
				<p id="desc">Click on any note to edit it.</p>
				<button onClick={onClearNotes} id="clearAll">
					Clear All
				</button>
			</div>
			{notes.length === 0 ? (
				<p>No notes available.</p>
			) : (
				notes.map((note) => (
					<Link className="links" href={`/Edit/${note.id}`} key={note.id}>
						<div className="note">
							<h3>{note.title}</h3>
							<p>{note.content}</p>
						</div>
					</Link>
				))
			)}
			<Link href="/Add">
				<button className="add-btn done-btn">Add A New Note</button>
			</Link>
		</DefaultLayout>
	);
}

export default Home;
