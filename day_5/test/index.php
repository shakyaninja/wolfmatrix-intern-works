<?php

class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }
  function __destruct() {
    echo "The fruit is {$this->name}.";
  }
}

$apple = new Fruit("Apple");

class Car{
	public $name;
	public $rate;
	public $milage;
	public $model;

	function __construct($name){
		$this -> name = $name;
	}

	function __destruct(){
		echo $name." Car Object is destroyed!";
	}
}

$bmw = new Car("BMW");


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Test Site</title>
</head>
<body>
	<form action="upload.php" method="post" enctype="multipart/form-data">
	Select image to upload:
	<input type="file" name="fileToUpload" id="fileToUpload">
	<input type="submit" value="Upload Image" name="submit">
	</form>
</body>
</html>