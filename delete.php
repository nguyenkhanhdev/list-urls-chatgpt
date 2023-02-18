<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$id = $_POST['id'];

	$lines = file('Urls.txt');
	$output = array();

	foreach ($lines as $line) {
		$data = str_getcsv($line);

		if ($data[0] != $id) {
			$output[] = $line;
		}
	}

	file_put_contents('Urls.txt', implode('', $output));
}
