<?php
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$sub=$_REQUEST['subject'];
$data=$_REQUEST['data'];
mail("aezazali.pro@gmail.com","Message from portfolio","subject $sub",$data,"from $name <$email>");
echo "<script type='text/javascrpt'>alert('your message sent successfully')
window.history.log(-1)
 </script>"

?>