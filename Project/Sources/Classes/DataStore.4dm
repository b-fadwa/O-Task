Class extends DataStoreImplementation

function loadUser()
	ds.User.getCurrentUser()
	
exposed function setCss($serverRef : text; $cssClass : text)
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	$component.addCSSClass($cssClass)
	
exposed function removeCss($serverRef : text; $cssClass : text)
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	$component.removeCSSClass($cssClass)
	
exposed function showDuration()
	ds.setCss("endDate"; "hidden")
	ds.removeCss("days"; "hidden")
	
exposed function showEndDate()
	ds.removeCss("endDate"; "hidden")
	ds.setCss("days"; "hidden")
	
exposed function getManifestObject() : object  //used in HomePage
	var $manifestFile: 4D.File
	var $manifestObject: object
	$manifestFile := file("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject := JSON Parse($manifestFile.getText())
	return $manifestObject
	
exposed function generateData()  //used in HomePage
	var $initData: cs.InitData
	$initData := cs.InitData.new()
	$initData.dropData()
	$initData.createData()
	web Form.setMessage("Data Generated Successfully!")
	
exposed function getTextFromTextEditor($content : text) : text
	return JSON Parse($content)[0].children[0].text
	
exposed function getCredentials() : object
	var $jsonFile: 4D.File
	var $text: text
	var $fileContent: object
	$jsonFile := file("/PROJECT/Sources/Shared/credentials/env.json")  //fill the json file with your sendGrid api credentials
	text := $jsonFile.getText()
	$fileContent := JSON Parse(text; 38)
	return $fileContent