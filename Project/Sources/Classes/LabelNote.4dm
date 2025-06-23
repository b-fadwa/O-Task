Class extends DataClass

exposed function removeLabelsFromNote($note : cs.NoteEntity)
	var $labelsNote: cs.LabelNoteSelection
	$labelsNote := this.query("note.ID = :1"; $note.ID)
	$labelsNote.drop()
	
exposed function selectLabels($note : cs.NoteEntity)->$labels : cs.LabelSelection
	$labels := this.query("note.ID = :1"; $note.ID).label