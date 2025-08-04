Class extends DataStoreImplementation

exposed Function pageLoaderNav()->$serverRef : Text
	$serverRef:=(Session:C1714.storage.payload#Null:C1517) ? "Index" : "SignIn"
	
exposed Function setCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.addCSSClass($cssClass)
	
exposed Function removeCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.removeCSSClass($cssClass)
	
exposed Function showDuration()
	ds:C1482.setCss("endDate"; "hidden")
	ds:C1482.removeCss("days"; "hidden")
	
exposed Function showEndDate()
	ds:C1482.removeCss("endDate"; "hidden")
	ds:C1482.setCss("days"; "hidden")
	
exposed Function getManifestObject() : Object  //used in HomePage
	var $manifestFile : 4D:C1709.File
	var $manifestObject : Object
	$manifestFile:=File:C1566("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject:=JSON Parse:C1218($manifestFile.getText())
	return $manifestObject
	
exposed Function generateData()  //used in HomePage
	var $initData : cs:C1710.InitData
	$initData:=cs:C1710.InitData.new()
	$initData.dropData()
	$initData.createData()
	Web Form:C1735.setMessage("Data Generated Successfully!")
	
exposed Function getTextFromTextEditor($content : Text) : Text
	return JSON Parse:C1218($content)[0].children[0].text
	
exposed Function getCredentials() : Object
	var $jsonFile : 4D:C1709.File
	var $text : Text
	var $fileContent : Object
	$jsonFile:=File:C1566("/PROJECT/Sources/Shared/credentials/env.json")  //fill the json file with your sendGrid api credentials
	text:=$jsonFile.getText()
	$fileContent:=JSON Parse:C1218(text; 38)
	return $fileContent