Class extends DataClass

exposed Function generateActivity($content : Text; $subject : Text; $problem : cs:C1710.IncidentEntity; $task : cs:C1710.TaskEntity)
	var $user : cs:C1710.UserEntity
	var $activity : cs:C1710.ActivityEntity
	var $info : Object
	$user:=ds:C1482.User.getCurrentUser()
	$activity:=This:C1470.new()
	$activity.user:=$user
	$activity.createdAt:=Current date:C33()
	$activity.creationTime:=Current time:C178()
	$activity.content:=$content
	$activity.subject:=$subject
	$activity.problem:=$problem
	$activity.task:=$task
	$info:=$activity.save()
	
	//getting activites by different criterias
exposed Function selectTaskActivities($task : cs:C1710.TaskEntity)->$activities : cs:C1710.ActivitySelection
	$activities:=This:C1470.query("task.ID = :1"; $task.ID).orderBy("createdAt asc, creationTime asc")
	
exposed Function selectIncidentActivities($problem : cs:C1710.IncidentEntity)->$activities : cs:C1710.ActivitySelection
	$activities:=This:C1470.query("problem.ID = :1"; $problem.ID).orderBy("createdAt asc, creationTime asc")