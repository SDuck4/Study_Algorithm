SELECT AIN.ANIMAL_ID
     , AIN.NAME
     , CASE
       WHEN AIN.SEX_UPON_INTAKE LIKE 'Neutered%'
       THEN 'O'
       WHEN AIN.SEX_UPON_INTAKE LIKE 'Spayed%'
       THEN 'O'
       ELSE 'X'
       END AS '중성화'
  FROM ANIMAL_INS AS AIN
 ORDER BY AIN.ANIMAL_ID ASC;
