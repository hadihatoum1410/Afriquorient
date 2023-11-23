<?php
$data =
  json_decode(file_get_contents('data.json'),true);
$newData = json_decode(file_get_contents('php://input'),true);
$data[] = $newData;
file_put_contents('data.json', json_encode($data));
?>
