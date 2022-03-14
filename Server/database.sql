CREATE DATABASE ltc

CREATE TABLE employee(
    requestId SERIAL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    EmpCode INTEGER,
    Designation VARCHAR(50),
    Department VARCHAR(20),
    joindate date,
    bandpay VARCHAR,
    leaveNature VARCHAR,
    leaveFrom date,
    leaveTo date,
    leaveNoOfDays INTEGER,
    prefixFrom date,
    prefixTo date,
    suffixFrom date,
    suffixTo date,
    spouse VARCHAR,
    selfFrom date,
    selfTo date,
    familyFrom date,
    familyTo date,
    homeTown VARCHAR,
    natureOfLTC VARCHAR,
    placeName VARCHAR,
    estimatedFare INTEGER,
    advancedRequired VARCHAR,
    encashmentRequired VARCHAR,
    encashmentDays INTEGER,
    blockYear VARCHAR,
    ltcTable VARCHAR,
    requestStatus VARCHAR,
    day_date_submitted VARCHAR
);


CREATE TABLE roles(
    email VARCHAR,
    user_type VARCHAR,
    empcode INTEGER,
    designation VARCHAR,
    department VARCHAR,
    userid VARCHAR, 
);
