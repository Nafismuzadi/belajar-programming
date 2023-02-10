# operasi aritmatika

a = 10
b = 3

# operasi tambah +
hasil = a + b
print(a,'+',b, '=', hasil)

# operasi pengurangan -
hasil = a - b
print(a,'-',b, '=', hasil)

# operasi perkalian *
hasil = a * b
print(a,'*',b, '=', hasil)

# operasi pembagian /
hasil = a / b
print(a,'/',b, '=', hasil)

# operasi eksponen (pangkat) **
hasil = a ** b
print(a,'**',b, '=', hasil)

# operasi modulus (hasil pembagian) %
hasil = a % b
print(a,'%',b, '=', hasil)

# operasi floor division (dibulatkan ke bawah) //
hasil = a // b
print(a,'//',b, '=', hasil)

# prioritas operasi, operasi precedence

'''
1. ()
2. eksponen **
3. perkalian *
4. pembagian /
5. modulus %
6. penambahan +
7. pengurangan -

'''

x = 3
y = 2
z = 4

hasil = x ** y * z + x / y - y % z // x
print(x,'**',y,'*',z,'+',x,'/',y,'-',y,'%',z,'//',x,'=', hasil)

hasil = x + y * z
print(x,'+',y,'*',z,'=',hasil)

# kurung akan mengambil langkah paling pertama

hasil = (x + y) * z
print('(',x,'+',y,')*',z,'=',hasil);