<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	$data = array();

	if (($handle = fopen("Urls.txt", "r")) !== false) {
		while (($row = fgetcsv($handle, 1000, ",")) !== false) {
			$data[] = array(
				'id' => $row[0],
				'name' => $row[1],
				'phone' => $row[2],
				'price' => $row[3],
				'address' => $row[4],
				'description' => $row[5],
				'url' => $row[6]
			);
		}

		fclose($handle);
	}

	header('Content-Type: application/json');
	echo json_encode($data);
}
