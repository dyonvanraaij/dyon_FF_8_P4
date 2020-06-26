<?php

if (isset($_POST['svg'])) {
    $randomString = generateRandomString(6);
    $myfile = fopen("./" . $randomString . ".svg", "w") or die("Unable to open file!");
    $txt = $_POST['svg'];
    fwrite($myfile, $txt);
    fclose($myfile);

    echo $randomString . ".svg";
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

?>
