var jmlAngkot = 10;
var angkotBeroprasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {

	if (noAngkot <= angkotBeroprasi) {
		console.log('angkot no. ' + noAngkot + ' beroprasi dengan baik');
	} else {
		console.log('angkot no. ' + noAngkot + ' sedang tidak beroprasi');
	}
}