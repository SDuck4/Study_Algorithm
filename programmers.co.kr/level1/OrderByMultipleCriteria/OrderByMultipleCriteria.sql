SELECT AIN.ANIMAL_ID
     , AIN.NAME
     , AIN.DATETIME
  FROM ANIMAL_INS AS AIN
 ORDER BY AIN.NAME ASC
        , AIN.DATETIME ASC;
