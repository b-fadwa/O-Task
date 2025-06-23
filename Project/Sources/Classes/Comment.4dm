Class extends DataClass

exposed function newTaskComment($comment : cs.CommentEntity; $task : cs.TaskEntity)->$comments : cs.CommentSelection
	var $info: object
	var $mailer: cs.Mailer
	var $commentContent; $subject; $content: text
	$mailer := cs.Mailer.new()
	$commentContent := ($comment.content # null) ? ds.getTextFromTextEditor($comment.content) : ""
	if (($comment.content = "") || ($comment.content = null))
		web Form.setError("Content of the comment is empty!")
	else 
		$comment.createdAt := current Date()
		$comment.createdTime := current Time()
		$info := $comment.save()
		if ($info.success)
			web Form.setMessage("Comment Created Successfully!")
			ds.Notification.generateNotification("comment"; $comment.task.user; $comment.user; $comment.task)
			ds.Activity.generateActivity("commented on this task: "+$commentContent; "task"; null; $comment.task)
			$subject := "New comment in the task: \""+comment.task.name+"\" of the board: \""+comment.task.boardOfTask.name+"\""
			$content := $comment.user.fullName+" has added a comment in this task: \""+commentContent+"\""
			$mailer.sendMail("New Comment in a Task"; $subject; $content; ds.User.getCurrentUser().email)
		else 
			web Form.setError("Error while creating!")
		end if 
	end if 
	$comments := this.taskComments($task)
	
exposed function newIncidentComment($comment : cs.CommentEntity; $incident : cs.IncidentEntity)
	var $info: object
	var $mailer: cs.Mailer
	var $commentContent; $subject; $content: text
	$mailer := cs.Mailer.new()
	$commentContent := ($comment.content # null) ? ds.getTextFromTextEditor($comment.content) : ""
	if (($comment.content = "") || ($comment.content = null))
		web Form.setError("Content of the comment is empty!")
	else 
		$comment.createdAt := current Date()
		$comment.createdTime := current Time()
		$info := $comment.save()
		if ($info.success)
			web Form.setMessage("Comment Created Successfully!")
			ds.Notification.generateNotifIncident($comment.problem.user; $comment.user; $comment.problem)
			ds.Activity.generateActivity("commented on this incident: "+$commentContent; "incident"; $comment.problem; null)
			$subject := "New comment in the incident: \""+comment.problem.title+"\""
			$content := $comment.user.fullName+" has added a comment in this incident: \""+commentContent+"\""
			if ($incident.assignee # null)
				$mailer.sendMail("New Comment in an Incident"; $subject; $content; ds.User.getCurrentUser().email)
			end if 
		else 
			web Form.setError("Error while creating!")
		end if 
	end if 
	
exposed function dropTaskComments($task : cs.TaskEntity)
	var $comments: cs.CommentSelection
	$comments := $task.comments
	$comments.drop()

exposed function taskComments($task : cs.TaskEntity)->$comments : cs.CommentSelection
	$comments := this.query("task.ID = :1"; $task.ID).orderBy("createdAt desc, createdTime desc")