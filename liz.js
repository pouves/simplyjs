console.log('Lab Protocol: Plasmid Prep');

simply.on('singleClick', function(e) {

var plasmidPrep = [
	‘Resuspend pellet in 250 ul Buffer 1 ’,
	‘Add 250 ul Buffer 2 and invert 6 times’,
	‘Add 350 ul Buffer N3 and invert 6 times’,
	‘Centrifuge high speed 5 mins’,
	‘Pour sup into column’,
	‘Centrifuge high speed 1 min’,
	‘Decant sup and add 750 ul Wash Buffer’,
	‘Centrifuge high speed 1 min’,
	‘Decant sup’,
	‘Centrifuge high speed 1 min’,
	‘Transfer column to new tube and add 50 ul Buffer EB’,
	‘Centrifuge high speed 1 min’,
	‘Measure concentration’
];
for (var i=0; i<plasmidPrep.length, i++)
if (e.button === ‘down’) {
		setText ({body: protocolStep[i]; 
};


simply.begin();
