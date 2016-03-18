<?php
// Routes

$app->get('/albums', function ($request, $response) {
//    $name = $request->getAttribute('name');
    $albums = $this->db->query(
        'SELECT * FROM albums
        INNER JOIN images_to_albums ON albums.album_id=images_to_albums.album_id
        INNER JOIN images ON images_to_albums.image_id=images.image_id'
    )->fetchAll();
    return $response->withJson($albums);
});

$app->get('/album/{id}', function ($request, $response) {
    $stmt = $this->db->prepare('SELECT * FROM albums
        INNER JOIN images_to_albums ON albums.album_id=images_to_albums.album_id
        INNER JOIN images ON images_to_albums.image_id=images.image_id
        WHERE albums.album_id = :id');
    $stmt->execute(array('id' => $request->getAttribute('id')));
    $album = $stmt->fetchAll();
    return $response->withJson($album);
});