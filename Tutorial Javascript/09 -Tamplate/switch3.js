// switch versi 2


var item = prompt('mau pesan apa? \n 1.nasi \n 2.roti \n 3.telur \n 4.daging ayam \n 5.daging babi \n 6.daging anjing dengan sayur kol');


switch( item ) {
	case 'nasi' :
	case 'roti' :
	case 'telur' :
	case 'daging ayam' :
	    alert('masyaAllah anda memesan makanan HALAL');
	    break;
	case 'daging babi' :
	case 'daging anjing dengan sayur kol' :
	    alert('astaghfirullah anda memesan makanan HARAM');
	    break;
	default :
	    alert('menu yang anda pesan telah sold out');
	    break;
}