<?php
// Routes

$app->get('/albums', function ($request, $response) {
//    $name = $request->getAttribute('name');
    $albums = $this->db->query('SELECT * FROM albums')->fetchAll();
    return $response->withJson($albums);
});