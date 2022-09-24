import random
import string

print("hello,Welcome to passsword generator")

length = int(input(" \nEnter the lenght of password: "))

lower = string.ascii_lowercase
upper = string.ascii_uppercase
num = string.digits
symbols = string.punctuation

all = lower + upper + num + symbols

temp = random.sample(all, length)
print(temp)
password = "".join(temp)
print(password)