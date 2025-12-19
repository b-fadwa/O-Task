Class extends DataClass

exposed Function verifyIfExist($name : Text; $board : cs:C1710.BoardEntity)
	var $entity : cs:C1710.ListEntity
	$entity:=This:C1470.query("name = :1 AND board.ID = :2"; $name; $board.ID).first()
	If (($name=Null:C1517) || ($name=""))
		ds:C1482.setCss("saveListAfterEditing"; "hidden")
		ds:C1482.setCss("createList"; "hidden")
	Else 
		If ($entity#Null:C1517)
			Web Form:C1735.setError("List already existed!")
			ds:C1482.setCss("saveListAfterEditing"; "hidden")
			ds:C1482.setCss("createList"; "hidden")
		Else 
			ds:C1482.removeCss("saveListAfterEditing"; "hidden")
			ds:C1482.removeCss("createList"; "hidden")
		End if 
	End if 
	
exposed Function taskList($task : cs:C1710.TaskEntity)->$list : cs:C1710.ListEntity
	$list:=This:C1470.query("tasks.ID = :1"; $task.ID).first()
	
exposed Function reloadTaskByList($board : cs:C1710.BoardEntity)->$selection : cs:C1710.ListSelection
	$selection:=This:C1470.query("board.ID = :1 AND name # :2"; $board.ID; "Closed")
	
exposed Function createBoardList($board : cs:C1710.BoardEntity; $list : cs:C1710.ListEntity)->$selection : cs:C1710.ListSelection
	var $info : Object
	$info:=$list.save()
	Web Form:C1735.setMessage("List Created Successfully!")
	$selection:=This:C1470.reloadTaskByList($board)
	
exposed Function updateBoardList($board : cs:C1710.BoardEntity; $list : cs:C1710.ListEntity)->$selection : cs:C1710.ListSelection
	var $info : Object
	$info:=$list.save()
	Web Form:C1735.setMessage("List Updated Successfully!")
	$selection:=This:C1470.reloadTaskByList($board)
	
	
exposed Function deleteList($list : cs:C1710.ListEntity)->$selection : cs:C1710.ListSelection
	var $result : cs:C1710.ListEntity
	var $result2 : cs:C1710.TaskSelection
	var $board : cs:C1710.BoardEntity
	$board:=$list.board
	$result:=This:C1470.query("ID = :1"; $list.ID).first()
	$result2:=ds:C1482.Task.query("list.ID = :1"; $list.ID)
	$result2.drop()
	$result.drop()
	Web Form:C1735.setMessage("List deleted Successfully!")
	$selection:=This:C1470.reloadTaskByList($board)