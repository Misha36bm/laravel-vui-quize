<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>

    @vite(['resources/sass/app.scss', 'resources/js/app.js', 'node_modules/flyonui/flyonui.js'])
</head>

<body id="app">
</body>

</html>
