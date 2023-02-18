<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$data = json_decode($_POST['data'], true);

	$fp = fopen('Urls.txt', 'a');
	fputcsv($fp, $data);
	fclose($fp);
}