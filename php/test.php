<?php
    $callback = $_GET['callback'];
    $data = array(
        'code' => 0
    );

    echo $callback, '(', json_encode($data), ')';
