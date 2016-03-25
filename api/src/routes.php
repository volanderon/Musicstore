<?php
// Routes

$app->get('/albums', function ($request, $response) {
    $sql = 'SELECT * FROM albums
        INNER JOIN images_to_albums ON albums.album_id=images_to_albums.album_id
        INNER JOIN images ON images_to_albums.image_id=images.image_id';
    $albums = $this->db->query($sql)->fetchAll();
    return $response->withJson($albums);
});

$app->get('/albums/{id}', function ($request, $response) {
    $stmt = $this->db->prepare('SELECT * FROM albums
        INNER JOIN images_to_albums ON albums.album_id=images_to_albums.album_id
        INNER JOIN images ON images_to_albums.image_id=images.image_id
        INNER JOIN genres_to_albums ON albums.album_id = genres_to_albums.album_id
        WHERE genres_to_albums.genre_id = :id');
    $stmt->execute(array('id' => $request->getAttribute('id')));
    $albums = $stmt->fetchAll();
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

$app->get('/genres', function ($request, $response) {
    $genres = $this->db->query('SELECT * FROM genres')->fetchAll();
    return $response->withJson($genres);
});