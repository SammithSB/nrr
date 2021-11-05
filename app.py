runs_scored= 110 + 151 + 210
overs_faced =60
runs_conceeded=111 + 152 + 144
overs_bowled=14.5+(17+(5.0/6))+20
input_runs_scored = int(input("enter runs scored by India: "))
input_overs_faced = int(input("enter overs faced(if it is 17.1 type 17+(1/6)) by India: "))
input_runs_conceeded = int(input("enter runs conceeded by India: "))
input_oves_bowled = int(input("enter overs bowled(if it is 17.1 type 17+(1/6)) by India: "))
nrr = ((runs_scored+input_runs_scored)/(overs_faced+input_overs_faced)) - ((runs_conceeded+input_runs_conceeded)/(overs_bowled+input_oves_bowled))
print(nrr)
