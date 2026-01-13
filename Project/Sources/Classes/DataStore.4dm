Class extends DataStoreImplementation

// Generates an HTML email template with a given title and content
exposed Function authentify($email : Text; $password : Text) : Boolean
	var $adminPrivileges : Collection:=["Tag"; "Incident"; "List"; "Board"; "currentUser"; "Task"; "chooseUserBoard"]
	var $pmPrivileges : Collection:=["privateBoardOrNot"; "Marketing"; "Tag"; "Incident"; "List"; "Board"; "currentUser"; "Task"]
	var $developerPrivileges : Collection:=["boardUserDeveloper"; "Engineering"; "Tag"; "Incident"; "List"; "Board"; "currentUser"; "Task"]
	If ((($email="") && ($password="")))
		return Session:C1714.setPrivileges(["guest"; "guestPromoted"])
	End if 
	If ($email#"")
		var $user : cs:C1710.UserEntity:=ds:C1482.User.query("email = :1"; $email).first()
		If ($user#Null:C1517)
			If (Verify password hash:C1534($password; $user.password))
				Use (Session:C1714.storage)
					Session:C1714.storage.payLoad:=New shared object:C1526("ID"; $user.ID; "login"; $user.email)
				End use 
				Case of 
					: ($user.role="Admin")
						return Session:C1714.setPrivileges($adminPrivileges)
					: ($user.role="ProjectManager")
						return Session:C1714.setPrivileges($pmPrivileges)
					: ($user.role="Developer")
						return Session:C1714.setPrivileges($developerPrivileges)
				End case 
				Web Form:C1735.setMessage("Connection Successfull!")
			Else 
				Web Form:C1735.setError("Connection Failed!")
			End if 
		Else 
			Web Form:C1735.setError("Connection Failed!")
		End if 
	End if 
	
	//used to add / remove css classes from components
exposed Function setCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.addCSSClass($cssClass)
	
exposed Function removeCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.removeCSSClass($cssClass)
	
	// UI helpers to toggle between duration-based and end-date-based inputs
exposed Function showDuration()
	ds:C1482.setCss("endDate"; "hidden")
	ds:C1482.removeCss("days"; "hidden")
	
exposed Function showEndDate()
	ds:C1482.removeCss("endDate"; "hidden")
	ds:C1482.setCss("days"; "hidden")
	
	//used to get the manifest structure for the Home page
exposed Function getManifestObject() : Object
	var $manifestFile : 4D:C1709.File
	var $manifestObject : Object
	$manifestFile:=File:C1566("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject:=JSON Parse:C1218($manifestFile.getText())
	return $manifestObject
	
	//used to generate data
exposed Function generateData()
	var $initData : cs:C1710.InitData
	$initData:=cs:C1710.InitData.new()
	$initData.dropData()
	$initData.createData()
	Web Form:C1735.setMessage("Data Generated Successfully!")
	
	//getting the direct content from the text editor
exposed Function getTextFromTextEditor($content : Text) : Text
	return JSON Parse:C1218($content)[0].children[0].text
	
	//reads the credentials from the json file with your sendGrid api credentials
exposed Function getCredentials() : Object
	var $jsonFile : 4D:C1709.File
	var $text : Text
	var $fileContent : Object
	$jsonFile:=File:C1566("/PROJECT/Sources/Shared/credentials/env.json")
	$text:=$jsonFile.getText()
	$fileContent:=JSON Parse:C1218($text; 38)
	return $fileContent