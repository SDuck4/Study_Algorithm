SELECT AIN.ANIMAL_ID
     , AIN.NAME
     , DATE_FORMAT(AIN.DATETIME, '%Y-%m-%d') AS '날짜'
  FROM ANIMAL_INS AS AIN
 ORDER BY AIN.ANIMAL_ID ASC;
