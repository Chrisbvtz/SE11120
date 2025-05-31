#Christopher Batz 
# week 3 in class lab assignment 
#10/15/24
#Prog.Essentials using Python_SE116.02
#This is the same as Lab 1 except instead of using assignment statements for hours worked, hourly rate,
#and number of weeks for a pay period, use the input statement to assign values to variables. Ask the
#user to input their hourly rate and their hours worked in a week, as well as the number of weeks for this
#pay period. You may still use 20% for the tax rate or ask the user for their tax rate as a whole number
#percentage (including this additional input statement, if calculations and final values are correct, will
#award you +5 bonus points on this in-class lab!). Once you have this information, you want to display the
#user’s Gross Pay, Taxes deducted, and the User’s Net Pay. All calculations should be limited to run once,
#rather than numerous times. Include in your flowchart the use of variables and both output as well as
#input statements

#VARIABLE DICTIONARY 


#--MAIN CODE-------------------------
print("\n --------W3D2 Demo W3 In Class Lab------------\n")
#assign known data / gather needed data 
#rate = 14.5
rate= float(input("Enter your hourly pay rate: $"))
hours = float(input("Enter your hours worked in a week: "))
tax = 20 /100 #tax = 0.2



#manipulate data / create new data 
gross = rate * hours * 2 #bi- weekly paycheck 
taxAmt = gross * tax 
net = gross - taxAmt 


#display our solution/ results 
print(f"\t    GROSS: ${gross:10.2f}")
print(f"\tTAXES PAID: ${taxAmt:10.2f}")
print(f"\t  NET PAY: ${net:10.2f}")
print("\n This is your income, Goodbye! :] \n")