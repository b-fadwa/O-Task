Class extends Entity

exposed Function editLabel()
	var $findLabel: boolean
	var $user: cs.UserEntity
	$user := ds.User.getCurrentUser()
	$findLabel := ds.Label.checkExistingLabel(this.title; $user)
	if ($findLabel = false)
		this.save()
		web Form.setMessage("Label \""+this.title+"\" edited successfully!")
		ds.setCss("editSelLabel"; "hidden")
	end if