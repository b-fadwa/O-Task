Class extends Entity

exposed Alias tasks taskTags.task

exposed Function get tasksByBoard()->$tasks : cs:C1710.TaskSelection
	$tasks:=(Session:C1714.storage.selectedBoard.ID=Null:C1517) ? ds:C1482.Task.newSelection() : This:C1470.tasks.query("list.board.ID = :1"; Session:C1714.storage.selectedBoard.ID)
	
exposed Function deleteTag()->$tag : cs:C1710.TagEntity
	var $Entity : cs:C1710.TagSelection
	var $info : Object
	$info:=$Entity.drop()