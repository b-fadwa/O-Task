Class extends DataClass

exposed Function verifyIfExist($name : Text)
	var $entity : cs:C1710.ListEntity
	$entity:=This:C1470.query("name = :1"; $name).first()
	If (($name=Null:C1517) || ($name=""))
		ds:C1482.setCss("createTag"; "hidden")
	Else 
		If ($entity#Null:C1517)
			Web Form:C1735.setError("Tag already existed!")
			ds:C1482.setCss("createTag"; "hidden")
		Else 
			ds:C1482.removeCss("createTag"; "hidden")
		End if 
	End if 
	
exposed Function selectFromSelection($task : cs:C1710.TaskEntity)->$selection : cs:C1710.TagSelection
	$selection:=This:C1470.all().minus($task.tags)