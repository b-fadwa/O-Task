Class extends DataClass

exposed function verifyIfExist($name : text)
	// provisional function: waiting this bug fixed about states causing refreshing page https://git-ps.wakanda.io/4d/web-studio/docs/-/issues/3027
	var $entity: cs.ListEntity
	$entity := this.query("name = :1"; $name).first()
	if (($name = null) || ($name = ""))
		ds.setCss("createTag"; "hidden")
	else
		if ($entity # null)
			web Form.setError("Tag already existed!")
			ds.setCss("createTag"; "hidden")
		else
			ds.removeCss("createTag"; "hidden")
		end if
	end if

exposed Function selectFromSelection($task : cs.TaskEntity) ->$selection : cs.TagSelection // function used only in edit $task 
	$selection := this.all().minus($task.tags)