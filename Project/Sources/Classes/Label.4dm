Class extends DataClass

exposed function checkExistingLabel($title : text; $user : cs.UserEntity)->$result : boolean
	var $findLabel: cs.LabelEntity
	$findLabel := this.query("title = :1 AND user.ID = :2"; $title; $user.ID).first()
	if ($findLabel # null)
		web Form.setWarning("This label \""+title+"\" exists already!")
		$result := true
	else 
		$result := false
	end if 

exposed function createLabel($title : text)
	var $label: cs.LabelEntity
	var $user: cs.UserEntity
	var $findLabel: boolean
	$user := ds.User.getCurrentUser()
	$findLabel := this.checkExistingLabel($title; $user)
	if ($findLabel = false)
		$label := this.new()
		$label.title := $title
		$label.user := $user
		$label.isDefault := false
		$label.save()
		web Form.setMessage("Label \""+title+"\" created successfully!")
	end if 
	
exposed function importLabels()->$result : cs.LabelSelection
	var $defaultLabels; $userLabels: cs.LabelSelection
	var $user: cs.UserEntity
	$result := this.newSelection()
	$user := ds.User.getCurrentUser()
	$defaultLabels := This.query("isDefault = :1"; true)
	$userLabels := $user.personalLabels
	$result := $defaultLabels.or($userLabels).orderBy("ID desc")