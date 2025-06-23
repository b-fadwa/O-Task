Class extends DataClass

exposed Function selectTags($task : cs.TaskEntity) ->$tags : cs.TagSelection
	$tags := This.query("task.ID = :1"; $task.ID).tag

exposed Function dropTaskTags($task : cs.TaskEntity)
	var $taskTags: cs.TaskTagSelection
	$taskTags := This.query("task.ID = :1"; $task.ID)
	$taskTags.drop()