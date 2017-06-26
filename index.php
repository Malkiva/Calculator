<!DOCTYPE html>
<html lang="ru">

<head>

    <meta charset="UTF-8">
    <title> calculator </title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Калькулятор на PHP</h1>
    <hr>
    <form action="" method="post">
        <input type="number" name="first" placeholder="Введите число" />
        <select name="op">
      <option value="plus">+</option>
      <option value="minus">-</option>
      <option value="multiply">*</option>
      <option value="delenie">/</option>
        </select>
        <input type="number" name="second" placeholder="Введите число" />
        <button name='butt'>Посчитать</button>
        <input type="number" name="result" value="" placeholder="Результат" />
    </form>
<?php
      if($_POST['butt'])
      {
        $a = (int)$_POST['first'];
        $b = (int)$_POST['second'];
        $c =$_POST['op'];
        $d;
        if($c==='plus')
          $d = $a + $b;
        else if($c==='minus')
          $d = $a - $b;
        else if($c==='multiply')
          $d = $a * $b;
        else if($c==='delenie')
          {
            if ($b === 0)
              echo "На ноль делить нельзя";
            else $d = $a / $b;
          }
          echo '<input type="number" name="result" value="'.$d.'">';
      }

?>

</body>

</html>
