// tugas membuat project juragan angkot di console 6 angkot beroparasi dengan baik (menggunakan pengulangan while) dan 4 angkot sedang tidak beroprasi (menggunakan pengulangan for)

var jmlAngkot = 6;
var jmlhAngkot = 4;
var angkot = 1;


while(angkot <= jmlAngkot); {
	console.log('angkot no. ' + angkot + 'beroparasi dengan baik');
	angkot++;
} 

for(var angkot2 = 1; angkot2 <= jmlhAngkot; angkot2++)  {
	console.log('angkot no. ' + angkot2 + 'sedang tidak beroparasi');
}