var jmlAngkot = 10;
var angkotBeroprasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {

	if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
		console.log('angkot no. ' + noAngkot + ' beroprasi dengan baik');
	} else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
		console.log('angkot no. ' + noAngkot + ' sedang lembur ')
	} else {
		console.log('angkot no. ' + noAngkot + ' sedang tidak beroprasi');
	}
}