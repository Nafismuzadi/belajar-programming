var jmlAngkot = 10;
var angkotBeroprasi = 6;

for (var NoAngkot = 1;NoAngkot <= jmlAngkot; NoAngkot++) {
	if (NoAngkot <= angkotBeroprasi) {
		console.log('angkot no. ' + NoAngkot + ' sedang bekerja');
	} else {
		console.log('angkot no. ' + NoAngkot + ' sedang ber malas malasan');
	}
}