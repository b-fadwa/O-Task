Class extends Entity

exposed alias labels labelNoteSel.label

exposed function get nbrLabels()->$result : integer
	$result := this.labels.length

exposed function addNote($labels : cs.LabelSelection)
	var $label: cs.LabelEntity
	var $labelnote: cs.LabelNoteEntity
	this.createdAt := current Date()
	this.creationTime := current Time()
	this.save()
	web Form.setMessage("Note Created successfully!")
	for Each ($label; $labels)
		$labelnote := ds.LabelNote.new()
		$labelnote.label := $label
		$labelnote.note := this
		$labelnote.save()
	end for each 
	
exposed function updateNote($labels : cs.LabelSelection)
	var $label: cs.LabelEntity
	var $labelnote: cs.LabelNoteEntity
	this.updateTime := current Time()
	this.updatedAt := current Date()
	this.save()
	web Form.setMessage("Content Updated Successfully!")
	ds.LabelNote.removeLabelsFromNote(this)
	for Each ($label; $labels)
		$labelnote := ds.LabelNote.new()
		$labelnote.label := $label
		$labelnote.note := this
		$labelnote.save()
	end for each 