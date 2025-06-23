Class extends DataClass

exposed function generateActivity($content : text; $subject : text; $problem : cs.IncidentEntity; $task : cs.TaskEntity)
	var $user: cs.UserEntity
	var $activity: cs.ActivityEntity
	var $info: object
	$user := ds.User.getCurrentUser()
	$activity := this.new()
	$activity.user := $user
	$activity.createdAt := current Date()
	$activity.creationTime := current Time()
	$activity.content := $content
	$activity.subject := $subject
	$activity.problem := $problem
	$activity.task := $task
	$info := $activity.save()
		
exposed function selectTaskActivities($task : cs.TaskEntity)->$activities : cs.ActivitySelection
	$activities := this.query("task.ID = :1"; $task.ID).orderBy("createdAt asc, creationTime asc")

exposed function selectIncidentActivities($problem : cs.IncidentEntity)->$activities : cs.ActivitySelection
	$activities := this.query("problem.ID = :1"; $problem.ID).orderBy("createdAt asc, creationTime asc")