DECLARE
    CURSOR loan_cursor IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN

    FOR loan_rec IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ' || loan_rec.CustomerID ||
            ' has Loan ID ' || loan_rec.LoanID ||
            ' due on ' || loan_rec.DueDate
        );

    END LOOP;

END;
/