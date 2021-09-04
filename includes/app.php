<?php

$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0 ? 'https://' : 'http://';
define('GLOBAL_URL', $protocol.$_SERVER['HTTP_HOST'].'/');
define('TEMPLATES_URL', __DIR__ . '/templates');
define('FUNCIONES_URL', __DIR__ . 'functions.php');