SELECT AOUT.ANIMAL_ID
     , AOUT.NAME
  FROM ANIMAL_OUTS AS AOUT
  LEFT JOIN ANIMAL_INS AS AIN
    ON AOUT.ANIMAL_ID = AIN.ANIMAL_ID
 WHERE AIN.ANIMAL_ID IS NULL;
