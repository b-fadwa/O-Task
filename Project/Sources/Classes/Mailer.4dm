Class constructor
	
/** In order to use the mailing class, you'll have to create an account with your email in the sendgrid $email api , store your credentials in an env file somewhere in your project structure*\
*/
	
	var $server : Object
	var $transporter : 4D:C1709.SMTPTransporter
	var $credentials : Object:=ds:C1482.getCredentials()
	$server:=New object:C1471()
	$server.host:=$credentials.host
	$server.port:=$credentials.port
	$server.user:=$credentials.user
	$server.password:=$credentials.password
	This:C1470.transporter:=4D:C1709.SMTPTransporter.new($server)
	
Function sendMail($subject : Text; $title : Text; $content : Text; $userEmail : Text)->$result : Text
	var $email; $status : Object
	$status:=This:C1470.transporter.checkConnection()
	If ($status.success)
		$email:=New object:C1471()
		$email.from:=""  // Add the email by which the API was created
		$email.to:=$userEmail
		$email.subject:=$subject
		$email.htmlBody:=cs:C1710.ContentHTML.me.mail($title; $content)
		$status:=This:C1470.transporter.send($email)
		$result:=String:C10($status.success)
	Else 
		$result:=String:C10($status.success)+", "+$status.statusText
	End if 