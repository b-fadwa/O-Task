Class extends DataClass

exposed function generateNotification($typeNotif : text; $user : cs.UserEntity; $user2 : cs.UserEntity; $task : cs.TaskEntity)  // $user2 represents the $user who has created the $notification
	var $notification: cs.NotificationEntity
	var $info: object
	$notification := this.new()
	$notification.createdAt := current Date()
	$notification.creationTime := current Time()
	$notification.user := $user
	$notification.isRead := false
	case of 
		: ($typeNotif = "task")
			$notification.type := "task"
			$notification.content := "New task has been assigned to you: \""+task.name+"\" in the board: \""+task.boardOfTask.name+"\""
		: ($typeNotif = "updateTask")
			$notification.type := "updateTask"
			$notification.content := $user2.fullName+" has updated this task: \""+task.name+"\" in the board: \""+task.boardOfTask.name+"\" "
		: ($typeNotif = "comment")
			$notification.type := "comment"
			$notification.content := $user2.fullName+" has added a new comment to this task: \""+task.name+"\" in the board: \""+task.boardOfTask.name+"\""
		: ($typeNotif = "closedTask")
			$notification.type := "closedTask"
			$notification.content := $user2.fullName+" has closed this task: \""+task.name+"\" in the board: \""+task.boardOfTask.name+"\""
	end case 
	$info := $notification.save()
	
exposed function generateNotifIncident($user : cs.UserEntity; $user2 : cs.UserEntity; $problem : cs.IncidentEntity)
	var $notification: cs.NotificationEntity
	var $info: object
	$notification := this.new()
	$notification.createdAt := current Date()
	$notification.creationTime := current Time()
	$notification.user := $user
	$notification.isRead := false
	$notification.type := "incident"
	$notification.content := $user2.fullName+" has added a new comment to this incident: \""+problem.title+"\""
	$info := $notification.save()
	
exposed function generateNotifAssignee($user : cs.UserEntity; $problem : cs.IncidentEntity)
	var $notification: cs.NotificationEntity
	var $info: object
	$notification := this.new()
	$notification.createdAt := current Date()
	$notification.creationTime := current Time()
	$notification.user := $user
	$notification.isRead := false
	$notification.type := "assigneeIncident"
	$notification.content := "New incident has been assigned to you: \""+problem.title+"\""
	$info := $notification.save()

exposed function tasksDeadlineToday($user : cs.UserEntity)
	var $notification: cs.NotificationEntity
	var $notifs: cs.NotificationSelection
	var $mailer: cs.Mailer
	var $tasks: cs.TaskSelection
	var $subject; $content: text
	$mailer := cs.Mailer.new()
	$tasks := $user.tasks.query("endDate = :1"; current Date())
	$notifs := this.query("user.ID = :1 AND type = :2 AND createdAt = :3"; $user.ID; "tasksDeadlineToday"; current Date())
	if (($tasks.length > 0) && ($notifs.length = 0))
		$notification := this.new()
		$notification.createdAt := current Date()
		$notification.creationTime := current Time()
		$notification.user := $user
		$notification.isRead := false
		$notification.type := "tasksDeadlineToday"
		$notification.content := "You have "+string($tasks.length)+" task(s) that today is the deadline! Go to your dashboard to see the tasks"
		$notification.save()
		$subject := "Tasks deadline today: \""+string(tasks.length)+" $task(s)\""
		$content := ds.User.getCurrentUser().fullName+" has "+string($tasks.length)+" task(s) that today is the deadline!"
		$mailer.sendMail("Tasks deadline today!"; $subject; $notification.content; ds.User.getCurrentUser().email)
	end if 
	
exposed function deleteTasksDeadlineToday($user : cs.UserEntity) // to be used in the function "this.checkEndDateTask(task)"
	var $notifs: cs.NotificationSelection
	$notifs := this.query("user.ID = :1 AND type = :2 AND createdAt = :3"; $user.ID; "tasksDeadlineToday"; current Date())
	if ($notifs.length # 0)
		$notifs.drop()
	end if

exposed function checkEndDateTask($task : cs.TaskEntity)
	if ($task.endDate = current Date())
		if ($task.user # null)
			this.deleteTasksDeadlineToday($task.user)
			this.tasksDeadlineToday($task.user)
		end if 
	end if 
	