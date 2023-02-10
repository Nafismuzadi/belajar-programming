# tipe data

# tipe data: Angka satuan yang tidak memakai koma (integer)
data_integer = 1
print('data : ', data_integer)
print('data : ', data_integer,' bertipe : ', type(data_integer))

#tipe data: angka dengan koma (float)
data_float = 1.5
print('data : ', data_float)
print('data : ', data_float,' bertipe : ', type(data_float))

# tipe data: kumpulan karakter (string)
data_string = 'ucup'
print('data : ', data_string)
print('data : ', data_string,' bertipe :', type(data_string))
 
# tipe data: biner True/False (boolean)
data_bool = True
print('data : ', data_bool)
print('data : ',data_bool,' bertipe :', type(data_bool))

##tipe data khusus

# bilangan kompleks
data_complex = complex(5,6)
print('data : ', data_complex)
print('data : ', data_complex,' bertipe :', type(data_complex))

from ctypes import c_double

data_c_double = c_double(10.5)
print('data : ', data_c_double)
print('data : ', data_c_double,' bertipe :', type(data_c_double))
