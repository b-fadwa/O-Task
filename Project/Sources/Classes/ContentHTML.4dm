shared singleton Class constructor
	
exposed shared function mail($title : text; $content : text)->$html : text
	$html := "<table style=\"width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; background: #ffffff; height: 530px;\">\t<tbody><tr style=\"height: 530px;\">\t<td style=\"padding: 0px; height: 530px;\" align=\"center\"><table style=\"width: 601px; border"\
		+"-"\
		+"collapse: collapse; border: 1px solid #cccccc; border-spacing: 0px; text-align: left; height: 281px;\">\t<tbody><tr style=\"height: 132px;\">\t\t<td style=\"padding: 40px 0px 30px; background: #3A5BCD; width: 599px; height: 132px;\" align=\"center\">\t<img style"\
		+"=\""\
		+"height: 150px; display: block;\" src=\"https://i.ibb.co/PWNdBsv/otask-Blue.png\" alt=\"\"/></td></tr><tr style=\"height: 149px;\">\t\t<td style=\"padding: 36px 30px 42px; width: 539px; height: 149px;\"><table style=\"width: 100%; border-collapse: c"\
		+"ollapse; border: 0px; border-spacing: 0px; height: 129px;\">\t\t<tbody><tr style=\"height: 111px;\"><td style=\"padding: 0px 0px 36px; color: #153643; height: 111px;\">\t\t<h1 style=\"font-size: 24px; margin: 0 0 20px 0; font-family: Arial,sans-serif; color: #3A5BCD;\">\t\t"\
		+$title+"</h1><p style=\"margin: 0 0 12px 0; font-size: 16px; line-height: 24px; font-family: Arial,sans-serif; text-align: justify;\">\t\t"\
		+$content+"</p>\t\t</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>"\
	