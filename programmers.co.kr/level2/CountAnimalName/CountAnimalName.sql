SELECT COUNT(DISTINCT AIN.NAME) AS 'count'
  FROM ANIMAL_INS AS AIN
 WHERE AIN.NAME IS NOT NULL;
