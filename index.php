<!DOCTYPE html>
<html>
<head>
	<title>Save Data to File</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="container">
		<h1>List Data - A program developed by Chat GPT - Built in 10 minutes</h1>
		<form id="myForm">
			<label for="id">ID:</label>
			<input type="text" id="id" name="id"><br>

			<label for="name">Name:</label>
			<input type="text" id="name" name="name"><br>

			<label for="phone">Phone:</label>
			<input type="text" id="phone" name="phone"><br>

			<label for="price">Price:</label>
			<input type="text" id="price" name="price"><br>

			<label for="address">Address:</label>
			<input type="text" id="address" name="address"><br>

			<label for="description">Description:</label>
			<input type="text" id="description" name="description"><br>

			<label for="url">URL:</label>
			<input type="text" id="url" name="url"><br>

			<input type="button" value="Save" onclick="saveData()">
		</form>

		<table id="myTable">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Phone</th>
					<th>Price</th>
					<th>Address</th>
					<th>Description</th>
					<th>URL</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>

	<script src="script.js"></script>
</body>
</html>
