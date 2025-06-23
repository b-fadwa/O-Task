Class extends DataClass

exposed function create($problem : cs.IncidentEntity; $task : cs.TaskEntity)->$selection : cs.TaskIncidentSelection
	var $taskProblem; $findTI: cs.TaskIncidentEntity
	$findTI := this.query("problem.ID = :1 AND task.ID = :2"; $problem.ID; $task.ID).first()
	if ($findTI = null)
		$taskProblem := this.new()
		$taskProblem.problem := $problem
		$taskProblem.task := $task
		$taskProblem.save()
		web Form.setMessage("Incident associated successfully to this task!")
	else 
		web Form.setError("The selected incident was already associated to this task!")
	end if 
	$selection := this.query("task.ID = :1"; $task.ID)
	
exposed function deleteTaskProblems($task : cs.TaskEntity)
	var $taskProblems: cs.TaskIncidentSelection
	$taskProblems := this.query("task.ID = :1"; $task.ID)
	$taskProblems.drop()