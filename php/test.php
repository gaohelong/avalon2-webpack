<?php
    $callback = $_GET['callback'];
    $user = $_GET['user'];
    $pwd = $_GET['pwd'];
    $code = -1;
    $msg = '用户名或密码错误';


    if (($user == 'helong' && $pwd == '123456')) {
        $code = 0;
        $msg = '登录成功';
    }

    $data = array(
        'code' => $code,
        'msg' => $msg
    );

    echo $callback, '(', json_encode($data), ')';
