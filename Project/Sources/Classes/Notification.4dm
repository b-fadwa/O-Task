Class extends DataClass

exposed Function generateNotification($typeNotif : Text; $user : cs:C1710.UserEntity; $user2 : cs:C1710.UserEntity; $task : cs:C1710.TaskEntity)
	var $notification : cs:C1710.NotificationEntity
	var $info : Object
	$notification:=This:C1470.new()
	$notification.createdAt:=Current date:C33()
	$notification.creationTime:=Current time:C178()
	$notification.user:=$user
	$notification.isRead:=False:C215
	Case of 
		: ($typeNotif="task")
			$notification.type:="task"
			$notification.content:="New task has been assigned to you: \""+$task.name+"\" in the board: \""+$task.boardOfTask.name+"\""
		: ($typeNotif="updateTask")
			$notification.type:="updateTask"
			$notification.content:=$user2.fullName+" has updated this task: \""+$task.name+"\" in the board: \""+$task.boardOfTask.name+"\" "
		: ($typeNotif="comment")
			$notification.type:="comment"
			$notification.content:=$user2.fullName+" has added a new comment to this task: \""+$task.name+"\" in the board: \""+$task.boardOfTask.name+"\""
		: ($typeNotif="closedTask")
			$notification.type:="closedTask"
			$notification.content:=$user2.fullName+" has closed this task: \""+$task.name+"\" in the board: \""+$task.boardOfTask.name+"\""
	End case 
	$info:=$notification.save()
	
exposed Function generateNotifIncident($user : cs:C1710.UserEntity; $user2 : cs:C1710.UserEntity; $problem : cs:C1710.IncidentEntity)
	var $notification : cs:C1710.NotificationEntity
	var $info : Object
	$notification:=This:C1470.new()
	$notification.createdAt:=Current date:C33()
	$notification.creationTime:=Current time:C178()
	$notification.user:=$user
	$notification.isRead:=False:C215
	$notification.type:="incident"
	$notification.content:=$user2.fullName+" has added a new comment to this incident: \""+$problem.title+"\""
	$info:=$notification.save()
	
exposed Function generateNotifAssignee($user : cs:C1710.UserEntity; $problem : cs:C1710.IncidentEntity)
	var $notification : cs:C1710.NotificationEntity
	var $info : Object
	$notification:=This:C1470.new()
	$notification.createdAt:=Current date:C33()
	$notification.creationTime:=Current time:C178()
	$notification.user:=$user
	$notification.isRead:=False:C215
	$notification.type:="assigneeIncident"
	$notification.content:="New incident has been assigned to you: \""+$problem.title+"\""
	$info:=$notification.save()
	
	//notifies if the task's deadline is today
exposed Function tasksDeadlineToday($user : cs:C1710.UserEntity)
	var $notification : cs:C1710.NotificationEntity
	var $notifs : cs:C1710.NotificationSelection
	var $mailer : cs:C1710.Mailer
	var $tasks : cs:C1710.TaskSelection
	var $subject; $content : Text
	$mailer:=cs:C1710.Mailer.new()
	$tasks:=$user.tasks.query("endDate = :1"; Current date:C33())
	$notifs:=This:C1470.query("user.ID = :1 AND type = :2 AND createdAt = :3"; $user.ID; "tasksDeadlineToday"; Current date:C33())
	If (($tasks.length>0) && ($notifs.length=0))
		$notification:=This:C1470.new()
		$notification.createdAt:=Current date:C33()
		$notification.creationTime:=Current time:C178()
		$notification.user:=$user
		$notification.isRead:=False:C215
		$notification.type:="tasksDeadlineToday"
		$notification.content:="You have "+String:C10($tasks.length)+" task(s) that today is the deadline! Go to your dashboard to see the tasks"
		$notification.save()
		$subject:="Tasks deadline today: \""+String:C10($tasks.length)+" $task(s)\""
		$content:=ds:C1482.User.getCurrentUser().fullName+" has "+String:C10($tasks.length)+" task(s) that today is the deadline!"
		$mailer.sendMail("Tasks deadline today!"; $subject; $notification.content; ds:C1482.User.getCurrentUser().email)
	End if 
	
exposed Function deleteTasksDeadlineToday($user : cs:C1710.UserEntity)
	var $notifs : cs:C1710.NotificationSelection
	$notifs:=This:C1470.query("user.ID = :1 AND type = :2 AND createdAt = :3"; $user.ID; "tasksDeadlineToday"; Current date:C33())
	If ($notifs.length#0)
		$notifs.drop()
	End if 
	
exposed Function checkEndDateTask($task : cs:C1710.TaskEntity)
	If ($task.endDate=Current date:C33())
		If ($task.user#Null:C1517)
			This:C1470.deleteTasksDeadlineToday($task.user)
			This:C1470.tasksDeadlineToday($task.user)
		End if 
	End if 
	