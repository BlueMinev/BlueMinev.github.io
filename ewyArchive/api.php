<?php

class MyAPI
{
    public function handleRequest()
    {
     function connectDB(){
        $mysqli = new mysqli(
            "localhost",
            "tm838_webdev",
            "8V8M@Nu6n2cXpv",
            "tm838_REST_API"
        ); 
        if ($mysqli->connect_error) {
            die($mysqli->connect_error);
            http_response_code(500);
            return null;
        }else { return $mysqli;}}

     function GETReq($mysqli){
        $oid = $_GET["oid"];
            
            $result = $mysqli->query(
                "SELECT name,date,id,comment FROM comments WHERE oid=\"$oid\""
            );
            if ($result->num_rows > 0) {
                $comments = array();
                while($row = $result->fetch_assoc()) {
                    $comments[] = $row;
                }
                $jayson=array("oid" => $oid,"comments"=>$comments) ;
                header('content-type: application/json');
                http_response_code(200);
                echo json_encode($jayson);
            } else{http_response_code(204);}}

     function POSTReq($mysqli){   
        $oid = $_REQUEST["oid"];
        $name = $_REQUEST["name"];
        $comment = $_REQUEST["comment"];
        if(ctype_alnum($oid)){
             $insert = $mysqli->query(
            "INSERT INTO comments (oid,name,date,comment)VALUES (\"$oid\", \"$name\", NOW(), \"$comment\")"
        );
        $last_id = array("id" => $mysqli->insert_id) ;
        
        echo json_encode($last_id);
    } 
        else{ http_response_code(400);}}



        $mysqli = connectDB();
        if ($_SERVER['REQUEST_METHOD']==='GET') {
            GETReq($mysqli);
        } else if ($_SERVER['REQUEST_METHOD']==='POST') {
         POSTReq($mysqli);
        } else {
            http_response_code(400);
        }
    }
}

$api = new MyAPI();
$api->handleRequest();
?>
