var phones=new Object();
/*Creating options for first select */
phones['initial'] = ['null','Select the type of cell-phone','select','Apple','Samsung'];

/*Creating options for second and third level select of apple phone*/
phones['Apple'] = ['null','Select type of Apple Model','select','I-Phone5','I-Phone4'];
phones['I-Phone5'] = ['null','Select the memory for Iphone5','select','32GB','64GB'];


phones['I-Phone4'] = ['null','Select the memory for Iphone4','select','8GB','16GB'];
phones['8GB']=['iphone4.png','null','null','null','null'];
phones['16GB']=['iphone4.png','null','null','null','null'];

/*Corresponding images stored for corresponding selection */
phones['32GB']=['iphone5.jpg','null','null','null','null'];
phones['64GB']=['iphone5.jpg','null','null','null','null'];

/*Creating options for second and third level select of samsung phone*/
phones['Samsung'] = ['null','Select the type of Samsung Model','select','Galaxy Note','Galaxy 3'];
phones['Galaxy Note'] =['null','Select the color for Galaxy Note','select','White','Black'];
phones['Galaxy 3'] =['null','Select the color for Galaxy 3 ','select','Garnet Red','Pebble Blue'];

/*Corresponding images stored for corresponding selection */
phones['White']=['white.jpg','null','null','null','null'];
phones['Black']=['black.jpg','null','null','null','null'];
phones['Garnet Red']=['red.jpg','null','null','null','null'];
phones['Pebble Blue']=['blue.jpg','null','null','null','null'];
