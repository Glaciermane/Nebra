<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = $_POST["name"];
   $discord = $_POST["discord"];
   $select = $_POST["select"];
   $message = $_POST["message"];

   // Hier können Sie den Code einfügen, um die Daten weiter zu verarbeiten,
   // wie sie in einer Datenbank zu speichern oder per E-Mail zu versenden.

   // Beispiel: Daten auf dem Bildschirm anzeigen
   echo "Name: " . $name . "<br>";
   echo "Discord: " . $discord . "<br>";
   echo "Self Assessment: " . $select . "<br>";
   echo "Nachricht: " . $message . "<br>";
}
?>
