Class extends DataClass

exposed function verifyIfExist($name : text; $board : cs.BoardEntity)
	// provisional function: waiting this bug fixed about states causing refreshing page https://git-ps.wakanda.io/4d/web-studio/docs/-/issues/3027
	var $entity: cs.ListEntity
	$entity := this.query("name = :1 AND board.ID = :2"; $name; $board.ID).first()
	if (($name = null) || ($name = ""))
		ds.setCss("saveListAfterEditing"; "hidden")
		ds.setCss("createList"; "hidden")
	else
		if ($entity # null)
			web Form.setError("List already existed!")
			ds.setCss("saveListAfterEditing"; "hidden")
			ds.setCss("createList"; "hidden")
		else
			ds.removeCss("saveListAfterEditing"; "hidden")
			ds.removeCss("createList"; "hidden")
		end if
	end if

exposed function taskList($task : cs.TaskEntity) ->$list : cs.ListEntity
	$list := this.query("tasks.ID = :1"; $task.ID).first()

exposed function reloadTaskByList($board : cs.BoardEntity)->$selection : cs.ListSelection
	$selection := this.query("board.ID = :1 AND name # :2"; $board.ID; "Closed")

exposed function createBoardList($board : cs.BoardEntity; $list : cs.ListEntity)->$selection : cs.ListSelection
	var $info: object
	$info := $list.save()
	web Form.setMessage("List Created Successfully!")
	$selection := this.reloadTaskByList($board)

	/*var findList : cs.ListEntity
	var $info: object
	if ($list.name = "Closed")
		web Form.setError("You can not create a \"Closed\" List!")
	else
		$list.board := $board
		findList := this.query("name = :1 AND board.ID = :2"; $list.name; $list.board.ID).first()
		if (findList.name = $list.name)
			web Form.setError("This name exists already!")
		else
			$info := $list.save()
			web Form.setMessage("List Created Successfully!")
			ds.setCss("addList"; "hidden")
		end if 
	end if 
	$selection := this.reloadTaskByList($board)*/
	
exposed function updateBoardList($board : cs.BoardEntity; $list : cs.ListEntity)->$selection : cs.ListSelection
	var $info: object
	$info := $list.save()
	web Form.setMessage("List Updated Successfully!")
	$selection := this.reloadTaskByList($board)

	/*var findList : cs.ListEntity
	var $info: object
	
	if ($list.name = "Closed")
		web Form.setError("You can not name it \"Closed\"!")
	else
		$list.board := $board
		findList := this.query("name = :1 AND board.ID = :2"; $list.name; $list.board.ID).first()
		if (findList.name = $list.name)
			web Form.setError("This name exists already!")
		else 
			$info := $list.save()
			web Form.setMessage("List Updated Successfully!")
			ds.setCss("editList"; "hidden")
		end if 
	end if 
	$selection := this.reloadTaskByList($board)*/
	
exposed function deleteList($list : cs.ListEntity)->$selection : cs.ListSelection
	var $result: cs.ListEntity
	var $result2: cs.TaskSelection
	var $board: cs.BoardEntity
	$board := $list.board
	$result := this.query("ID = :1"; $list.ID).first()
	$result2 := ds.Task.query("list.ID = :1"; $list.ID)
	$result2.drop()
	$result.drop()
	web Form.setMessage("List deleted Successfully!")
	$selection := this.reloadTaskByList($board)