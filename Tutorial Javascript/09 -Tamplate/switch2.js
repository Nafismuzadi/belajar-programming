// switch versi normal


var item = prompt('mau pesan apa? \n 1.nasi \n 2.roti \n 3.telur \n 4.daging ayam \n 5.daging babi \n 6.daging anjing dengan sayur kol');


switch( item ) {
	case 'nasi' :
	    alert('masyaAllah anda memesan makanan HALAL');
	    break;
	case 'roti' :
	    alert('masyaAllah anda memesan makanan HALAL');
	    break;
	case 'telur' :
	    alert('masyaAllah anda memesan makanan HALAL');
	    break;
	case 'daging ayam' :
	    alert('masyaAllah anda memesan makanan HALAL');
	    break;
	case 'daging babi' :
	    alert('astaghfirullah anda memesan makanan HARAM');
	    break;
	case 'daging anjing dengan sayur kol' :
	    alert('astaghfirullah anda memesan makanan HARAM');
	    break;
	default :
	    alert('menu yang anda pesan telah sold out');
	    break;
}

