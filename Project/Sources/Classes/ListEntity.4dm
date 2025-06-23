Class extends Entity

exposed function get hasEmptyTasks()->$result : text
	$result := (this.tasks.length = 0) ? "noTasks" : "hasTasks"