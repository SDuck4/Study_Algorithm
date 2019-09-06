SELECT AIN.NAME
     , COUNT(AIN.ANIMAL_ID) AS COUNT
  FROM ANIMAL_INS AS AIN
 GROUP BY AIN.NAME
HAVING AIN.NAME IS NOT NULL
   AND COUNT(AIN.ANIMAL_ID) > 1
 ORDER BY AIN.NAME;
