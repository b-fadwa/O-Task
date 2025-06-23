Class extends DataClass

exposed function searchTaskByList($Search : text; $board : cs.BoardEntity; $priority : text; $list : cs.ListEntity; $user : cs.UserEntity)->$selection : cs.TaskSelection
	if ($priority = "all")
		$selection := ($list # null) ? this.query("list.ID = :1 AND boardOfTask.ID = :2"; $list.ID; $board.ID) : this.query("boardOfTask.ID = :1"; $board.ID)
	else 
		$selection := ($list # null) ? this.query("priority = :1 AND list.ID = :2 AND boardOfTask.ID = :3"; $priority; $list.ID; $board.ID) : this.query("priority = :1 AND boardOfTask.ID = :2"; $priority; $board.ID)
	end if 
	$selection := ($user # null) ? $selection.query("user.ID = :1 AND name = :2"; $user.ID; "@"+$Search+"@") : $selection.query("name = :1"; "@"+$Search+"@")
	$selection := $selection.orderBy("endDate")
	
exposed function tasksPriority($board : cs.BoardEntity; $priority : text)->$selection : cs.TaskSelection
	$selection := this.query("boardOfTask.ID = :1 AND priority = :2"; $board.ID; $priority).orderBy("endDate")
	
exposed function searchTaskByPriority($Search : text; $board : cs.BoardEntity; $priority : text; $user : cs.UserEntity)->$selection : cs.TaskSelection
	if ($Search # null) 
		$selection := this.query("name = :1 AND boardOfTask.ID = :2 AND priority = :3"; "@"+$Search+"@"; $board.ID; $priority).orderBy("name asc")
	else
		$selection := this.query("boardOfTask.ID = :1 AND priority = :2"; $board.ID; $priority).orderBy("name asc")
	end if
	$selection := ($user # null) ? $selection.query("user.ID = :1"; $user.ID) : $selection
	$selection := $selection.orderBy("endDate")
	
exposed function closedTasks($search : text; $board : cs.BoardEntity; $user : cs.UserEntity)->$selection : cs.TaskSelection
	$selection := this.query("name = :1 AND list.name = :2 AND boardOfTask.ID = :3"; "@"+$search+"@"; "Closed"; $board.ID)
	$selection := ($user # null) ? $selection.query("user.ID = :1"; $user.ID) : $selection
	
exposed function deleteTask($task : cs.TaskEntity)
	var $info: object
	ds.TaskTag.dropTaskTags($task)
	ds.Comment.dropTaskComments($task)
	ds.TaskIncident.deleteTaskProblems($task)
	$task.deleteActivities()
	$info := $task.drop()
	if ($info.success)
		web Form.setMessage("Task successfully deleted!")
	end if