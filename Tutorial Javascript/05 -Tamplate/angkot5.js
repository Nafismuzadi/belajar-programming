// tugas membuat project juragan angkot tapi no. 8 dan 10 sedang lembur


var jmlAngkot = 10;
var angkotBeroprasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot <= angkotBeroprasi) {
		console.log('angkot no. ' + noAngkot + ' beroprasi dengan baik');
	} else if (noAngkot === 8) {
		console.log('angkot no. ' + noAngkot + ' sedang lembur');
	} else if (noAngkot === 10) {
		console.log('angkot no. ' + noAngkot + ' sedang lembur');
	} else {
		console.log('angkot no. ' + noAngkot + 'sedang tidak beroprasi');
	}
}