// tugas membuat project juragan angkot no.1-6 beroprasi dengan baik, angkot no.7 sedang tidak beroprasi, angkot no.8 sedang lembur, angkot no.9-10 sedang tidak beroprasi


var jmlAngkot = 10;
var angkotBeroprasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {

	if (noAngkot <= angkotBeroprasi) {
		console.log('angkot no. ' + noAngkot + ' beroprasi dengan baik');
	} else if(noAngkot === 8 ) {
		console.log('angkot no. ' + noAngkot + ' sedang lembur ')
	} else {
		console.log('angkot no. ' + noAngkot + ' sedang tidak beroprasi');
	}
}