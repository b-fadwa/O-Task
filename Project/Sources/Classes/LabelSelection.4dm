Class extends EntitySelection

exposed function addToLabel($option : cs.LabelEntity)->$selection : cs.LabelSelection
	$selection := this.copy()
	$selection := $selection.add($option)
	
exposed function removeLabel($option : cs.LabelEntity)->$selection : cs.LabelSelection
	$selection := This.minus($option)

exposed Function selectFromAllLabels($note : cs.NoteEntity) ->$selection : cs.LabelSelection
	var $labels: cs.LabelSelection
	$labels := ds.LabelNote.selectLabels($note)
	$selection := This.minus($labels)