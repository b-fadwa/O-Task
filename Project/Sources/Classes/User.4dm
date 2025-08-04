Class extends DataClass

exposed Function searchUser($search : Text)->$users : cs:C1710.UserSelection
	$users:=This:C1470.query("fullName = :1"; "@"+$search+"@").orderBy("fullName asc")
	
exposed Function signIn($email : Text; $password : Text)->$user : cs:C1710.UserEntity
	var $myComponent : 4D:C1709.WebFormItem
	var $info : Object
	$info:=New object:C1471
	$info.privileges:=New collection:C1472("currentUser")
	//Session.clearPrivileges()
	If (($email#"") && ($email#Null:C1517))
		$user:=This:C1470.query("email = :1"; $email).first()
		If ($password="")
			Web Form:C1735.setWarning("Password empty!")
		Else 
			If ($user#Null:C1517)
				If (Verify password hash:C1534($password; $user.password))
					$user.role:="Admin"
					return $user
					//Session.setPrivileges($info)
					If (Session:C1714.storage.payload=Null:C1517)
						Use (Session:C1714.storage)
							Session:C1714.storage.playload:=New shared object:C1526("ID"; $user.ID; "email"; $user.email; "role"; $user.role)
						End use 
					End if 
				End if 
			End if 
		End if 
	Else 
		Web Form:C1735.setWarning("Please fill all required fields")
	End if 