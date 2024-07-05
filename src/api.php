<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        handleGet($pdo);
        break;
    case 'POST':
        handlePost($pdo, $input);
        break;
    case 'PUT':
        handlePut($pdo, $input);
        break;
    case 'DELETE':
        handleDelete($pdo, $input);
        break;
    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
}

function handleGet($pdo) {
    $sql = "SELECT * FROM journals";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}

function handlePost($pdo, $input) {
    $sql = "INSERT INTO journals (name, indexing, editor, webpage, submit_link, other_info, editor_email, image) VALUES (:name, :indexing, :editor, :webpage, :submit_link, :other_info, :editor_email, :image)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'name' => $input['name'],
        'indexing' => $input['indexing'],
        'editor' => $input['editor'],
        'webpage' => $input['webpage'],
        'submit_link' => $input['submit_link'],
        'other_info' => $input['other_info'],
        'editor_email' => $input['editor_email'],
        'image' => $input['image']
    ]);
    echo json_encode(['message' => 'Journal created successfully']);
}

function handlePut($pdo, $input) {
    $sql = "UPDATE journals SET name = :name, indexing = :indexing, editor = :editor, webpage = :webpage, submit_link = :submit_link, other_info = :other_info, editor_email = :editor_email, image = :image WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'name' => $input['name'],
        'indexing' => $input['indexing'],
        'editor' => $input['editor'],
        'webpage' => $input['webpage'],
        'submit_link' => $input['submit_link'],
        'other_info' => $input['other_info'],
        'editor_email' => $input['editor_email'],
        'image' => $input['image'],
        'id' => $input['id']
    ]);
    echo json_encode(['message' => 'Journal updated successfully']);
}

function handleDelete($pdo, $input) {
    $sql = "DELETE FROM journals WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $input['id']]);
    echo json_encode(['message' => 'Journal deleted successfully']);
}
?>
 