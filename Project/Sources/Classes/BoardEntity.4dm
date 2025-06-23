Class extends Entity

exposed alias tags lists.tasks.taskTags.tag
exposed alias tasks lists.tasks

exposed function get nbrTasks()->$nbrTasks : integer
	$nbrTasks := this.tasks.length
	
exposed function get nbrClosedTasks()->$nbrClosedTasks : integer
	var $listClosed: cs.ListEntity
	$listClosed := this.lists.query("name = :1"; "Closed").first()
	$nbrClosedTasks := $listClosed.tasks.length
	
exposed function get progress()->$progress : integer
	$progress := trunc((this.tasks.sum("track")/(this.nbrTasks*100))*100; 2)
	
exposed function lists()->$selection : cs.ListSelection
	$selection := this.lists
	
exposed function allListsNotClosed()->$selection : cs.ListSelection
	$selection := this.lists.query("name # :1"; "Closed")
	
exposed function create()
	var $info: object
	var $list: cs.ListEntity
	this.createdAt := current Date()
	$info := this.save()
	web Form.setMessage("Board Created Successfully!")
	$list := ds.List.new()
	$list.board := this
	$list.name := "Closed"
	$list.save()
	
exposed function update()
	var $info: object
	this.updatedAt := current Date()
	$info := this.save()
	if ($info.success)
		web Form.setMessage("Board Updated Successfully!")
	else 
		web Form.setError("Error while updating!")
	end if