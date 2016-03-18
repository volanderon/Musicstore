<?php
// Routes

$app->get('/', function ($request, $response) {
//    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello");

    return $response;
});