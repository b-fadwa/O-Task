Class extends DataClass

exposed Function checkExistingLabel($title : Text; $user : cs:C1710.UserEntity)->$result : Boolean
	var $findLabel : cs:C1710.LabelEntity
	$findLabel:=This:C1470.query("title = :1 AND user.ID = :2"; $title; $user.ID).first()
	If ($findLabel#Null:C1517)
		Web Form:C1735.setWarning("This label \""+$title+"\" exists already!")
		$result:=True:C214
	Else 
		$result:=False:C215
	End if 
	
exposed Function createLabel($title : Text)
	var $label : cs:C1710.LabelEntity
	var $user : cs:C1710.UserEntity
	var $findLabel : Boolean
	$user:=ds:C1482.User.getCurrentUser()
	$findLabel:=This:C1470.checkExistingLabel($title; $user)
	If ($findLabel=False:C215)
		$label:=This:C1470.new()
		$label.title:=$title
		$label.user:=$user
		$label.isDefault:=False:C215
		$label.save()
		Web Form:C1735.setMessage("Label \""+$title+"\" created successfully!")
	End if 
	
exposed Function importLabels()->$result : cs:C1710.LabelSelection
	var $defaultLabels; $userLabels : cs:C1710.LabelSelection
	var $user : cs:C1710.UserEntity
	$result:=This:C1470.newSelection()
	$user:=ds:C1482.User.getCurrentUser()
	$defaultLabels:=This:C1470.query("isDefault = :1"; True:C214)
	$userLabels:=$user.personalLabels
	$result:=$defaultLabels.or($userLabels).orderBy("ID desc")