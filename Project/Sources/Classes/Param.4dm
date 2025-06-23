Class constructor
	this.dataType:="text"
	this.data:=""
	this.dataError:=""
	this.currentDirectory:=folder("/SOURCES/Shared")

Function onResponse($systemWorker : Object)
	this._appendToFile("onResponse";$systemWorker.response)

Function onData($systemWorker : Object; $info : object)
	this.data+=$info.data
	this._appendToFile("onData";this.data)

Function onDataError($systemWorker : object; $info : Object)
	this.dataError+=$info.data
	this._appendToFile("onDataError";this.dataError)

Function onTerminate($systemWorker : Object)
	var $textBody: text
	$textBody:="Response: "+$systemWorker.response
	$textBody+="ResponseError: "+$systemWorker.responseError
	this._appendToFile("onTerminate";$textBody)

Function _appendToFile($title : text; $textBody : text)
	var $f: 4D.File := file("/SOURCES/Shared/"+$title+".txt")
	var $content: text := ""
	
	if ($f.exists)
		$content := $f.getText()
	end if

	$f.setText($content+"\n"+$textBody)
